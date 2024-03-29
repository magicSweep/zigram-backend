import { Response } from "express";
import { compose, NI_Next, Done, then, _catch, tap, elif, Next } from "fmagic";
import { Logger } from "winston";
import { Fs } from "../../../service/Fs/types";
import { MainData } from "../../middleware/Main/types";
import { OriginalPhotoStore } from "../../service/OriginalPhotoStore/types";
import { PhotosWebStore } from "../../service/PhotosWebStore/types";
import { CleanUp, StoragesCleanUp, CleanUpReqData } from "./types";

export const cleanUp_ =
  (removePhoto: Fs["removePhoto"], removePhotos: Fs["removePhotos"]) =>
  (logger: Logger) =>
    compose<MainData, void>(
      // remove upload file
      tap(({ reqInfo }: MainData) =>
        removePhoto(reqInfo.photoFile.path).catch((err) => {
          logger.log("error", "Can not delete uploaded photo", {
            reqInfo,
            error: err,
          });
        })
      ),
      // remove temp optimized photos
      elif<MainData, MainData>(
        ({ optimizedPhotosPaths }: MainData) =>
          optimizedPhotosPaths !== undefined,
        tap(({ optimizedPhotosPaths }: MainData) =>
          removePhotos([
            ...(optimizedPhotosPaths as Map<number, string>).values(),
          ]).catch((err) => {
            logger.log("error", "Can not delete optimized temp photo files", {
              optimizedPhotosPaths,
              error: err,
            });
          })
        ),
        (val: MainData) => val
      )
    );

export const storagesCleanUp_ =
  (
    removePhotosFromWebStore: PhotosWebStore["removePhotos"],
    removePhotoFromGoogleDrive: OriginalPhotoStore["remove"]
  ) =>
  (logger: Logger) =>
    compose<CleanUpReqData, void>(
      elif<CleanUpReqData, CleanUpReqData>(
        ({ webImagesInfo }: CleanUpReqData) => webImagesInfo !== undefined,
        tap(({ webImagesInfo }: CleanUpReqData) =>
          removePhotosFromWebStore(webImagesInfo?.ids as string[]).catch(
            (err) => {
              logger.log(
                "error",
                "Can not delete photo files from web storage",
                {
                  webImagesInfo,
                  error: err,
                }
              );
            }
          )
        ),
        (val: CleanUpReqData) => val
      ),
      // Do we need to delete file from google drive ?
      elif<CleanUpReqData, CleanUpReqData>(
        ({ googleDriveId }: CleanUpReqData) => googleDriveId !== undefined,
        tap(({ googleDriveId }: CleanUpReqData) =>
          removePhotoFromGoogleDrive(googleDriveId as string).catch((err) => {
            logger.log(
              "error",
              "Can not delete photo file from original storage",
              {
                googleDriveId,
                error: err,
              }
            );
          })
        ),
        (val: CleanUpReqData) => val
      )
    );

export const fullCleanUp_ =
  (cleanUp: CleanUp, storagesCleanUp: StoragesCleanUp) => (logger: Logger) =>
    compose<MainData, void>(cleanUp(logger), storagesCleanUp(logger));
