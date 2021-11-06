import { resolve } from "path";
import { makeBase64s, makePlaceholders } from "./SharpHelper";
import wait from "waait";

describe("makeBase64s", () => {
  const pathToDir = resolve(__dirname, "..", "static");
  test.skip("", async () => {
    const res = await makeBase64s(pathToDir);

    //const res = await Promise.all(promises);
    //await wait(3000);

    expect(res).toEqual("hello");
  });
});

/* describe.only("makePlaceholders", () => {
  const pathToDir = resolve(process.cwd(), "src", "static");
  test("", async () => {
    const res = await makePlaceholders(pathToDir);

    //const res = await Promise.all(promises);
    //await wait(3000);

    expect(res).toEqual("hello");
  });
}); */

const res = [
  {
    aspectRatio: 1.6,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAAABgIDAQAAAAAAAAAAAAAAAQIDBAUGERITMlH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQADEQL/2gAMAwEAAhEDEQA/ALXEbCVOtcwOY+t7ovZDDXI/DaUN6SXwi2YAAfC5FeZYz//Z",
    name: "12.jpg",
  },
  {
    aspectRatio: 0.71,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAABBAIDAQAAAAAAAAAAAAABAAIDBAURBhIhMf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECEhP/2gAMAwEAAhEDEQA/AKF6haw8raGH5Dm8VUhYA2KjK1gfv3u8kEukII27zeviIicolXbP/9k=",
    name: "13.jpg",
  },
  {
    aspectRatio: 1.54,
    base64:
      "iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAIUlEQVQImWNgkE73qb244OT//2//M9RlrGVmsHQ3KgJyAKDEDRXUSgdAAAAAAElFTkSuQmCC",
    name: "dream.png",
  },
  {
    aspectRatio: 1.5,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAABBAIDAQAAAAAAAAAAAAABAAIDBQQGERIhFP/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAXEQADAQAAAAAAAAAAAAAAAAAAARES/9oADAMBAAIRAxEAPwC71bQNUtMzZDn0FfN8tvPjQAxACOJoZ1Y0DwAcnxEROsWUf//Z",
    name: "freestocks-9U.jpg",
  },
  {
    aspectRatio: 0.75,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAMDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAgEAABAwMFAQAAAAAAAAAAAAABAAIDBBESBQYXITFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwCX8176ony08WtSujjkeG5kkgZHq9/B58REQGr/2Q==",
    name: "image0.jpeg",
  },
  {
    aspectRatio: 0.75,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAMDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAeEAACAgICAwAAAAAAAAAAAAABAgADBAUGERIhMf/EABUBAQEAAAAAAAAAAAAAAAAAAAQF/8QAGBEAAgMAAAAAAAAAAAAAAAAAAQIAETH/2gAMAwEAAhEDEQA/AL5trCeSZDJsdtUHrpfwpz7akXupD0qKwVR7+AARESeXa9iyovJ//9k=",
    name: "image2.jpeg",
  },
  {
    aspectRatio: 0.75,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAMDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAbEAADAQEAAwAAAAAAAAAAAAABAgMEAAUGEf/EABUBAQEAAAAAAAAAAAAAAAAAAAIE/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECURL/2gAMAwEAAhEDEQA/AKm/1LxNd+opO+ea2eaRhoec5orFVVVB+AAADnOcVKwq7rT/2Q==",
    name: "image7.jpeg",
  },
  {
    aspectRatio: 1.6,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAfEAACAgIBBQAAAAAAAAAAAAABAgAEAwUGBwgiMWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AnncTevca6m2dbpthfr00q4GVGtZMhBbGCfJ2J9/YiIH/2Q==",
    name: "ladki.jpg",
  },
  {
    aspectRatio: 0.67,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAABBAICAwAAAAAAAAAAAAABAAIDEQQhBQcSFDH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBf/EABoRAAICAwAAAAAAAAAAAAAAAAACAQMSITH/2gAMAwEAAhEDEQA/AJeTunOyZpHw8ZgxRA+LYvWicGUBoFzXGrs6ob+BEREvCvZUmU6P/9k=",
    name: "michael-dam-mEZ3PoFGs_k-unsplash.jpg",
  },
  {
    aspectRatio: 1.78,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAACAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAdEAACAwACAwAAAAAAAAAAAAABAgAEBQMHETFh/8QAFQEBAQAAAAAAAAAAAAAAAAAABQb/xAAXEQEAAwAAAAAAAAAAAAAAAAAAAQMy/9oADAMBAAIRAxEAPwCddvZ9KltY6U6deujY9V2Xi4lQFip8kgD39iIlSHrzD//Z",
    name: "peizaj.jpg",
  },
  {
    aspectRatio: 2.12,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAACAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAeEAEAAgIBBQAAAAAAAAAAAAABAAIFBgMEESGBof/EABUBAQEAAAAAAAAAAAAAAAAAAAQF/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECMbHB/9oADAMBAAIRAxEAPwCWb3Zpj9NrRa1MB06A9jzflX6r7iIi49elFUf/2Q==",
    name: "peizaj4.jpg",
  },
];

const r = [
  {
    aspectRatio: 1.6,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAJAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQMG/8QAJhAAAQIDBgcAAAAAAAAAAAAAAgABAwQFBgcREnOxExUhNDVBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAIE/8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAAyEE/9oADAMBAAIRAxEAPwDaWuq7UemcQMCiP1ye3ZE2Lq3OJKJHIWFnLFh+I+8jvpXTPZTuu8IeoW6IYm6WWVqnMpA07P/Z",
    name: "12.jpg",
  },
  {
    aspectRatio: 0.71,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAVAA8DASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUGBP/EACQQAAEDAwQBBQAAAAAAAAAAAAECAwQABREGEyExQSIyYXHR/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABsRAAEFAQEAAAAAAAAAAAAAAAEAAgMREiET/9oADAMBAAIRAxEAPwCR0xDVqCU21MK2UYz19/lPVanj6dL1unSXWG2leh5ocn4NbZ7L0N6Eq3gIDfCseaVSbM3OnSXpyd7eIOFeKOwPI3SQ7zDc31UG7lBcKQSB1S2wvKuN0kF/2tjCUjqiinScZYRoRqQAr//Z",
    name: "13.jpg",
  },
  {
    aspectRatio: 1.54,
    base64:
      "iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAIAAADkeZOuAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB10lEQVQYlQHMATP+AC02hzI9kTxNpE9lu2CB0meX4WWi6Wql7G+o7Hmn6IWn4pGk2JKbzIeLwX5+uwA5QZBAS5pJVqhTZbhde8tnk91upulzru12su96remFqOCWo9OgoMmimsChlLsAQEaTS1SeVF+qWGi1XHXEZYrVcJzeeKnkf7PpgbDniqfbmJ/Mp57Ct6K7vqO3AFVSlV1eoGNpq2ButmB0v2B4wmJ6uWmCu3yUyIWc04uYzZiUv7OeutCtt961tABwYptxZqFxbqtlb7RfbbRTX6NIT4pQVItrbqWAgr2LiL+airS5mbHZq67ota0AgW2jgm6kgnOqcWyuYWKlSkqKOTNqPTRpWU+JdGqniHmzl32rt42p2KCn7a2mAHZio3xnpIBrpnRjpGJWmVFFhUg4c089dmNSj3hmpIxzrZV0p6t8pMiLoeGZoACAaquHbquMcKmFa6Z2YJ9qVZRiSohmTYp2X5uOdK2kg7aqg7K1ha/Kj6zfmqsAl3+zlXuwlXuwkHmyjniyi3CqgmOcf2Caim+qnYO7s5TDv5rAz6bC4LLC67rCALOXvKqPuKaOu6CNwaWRxKCEtpBuoYVknI91r6GMw7uiz86vzebF1PXV1vrc1qcTAoLxnqp4AAAAAElFTkSuQmCC",
    name: "dream.png",
  },
  {
    aspectRatio: 1.5,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAMG/8QAJRAAAQIFBAEFAAAAAAAAAAAAAQIFAAMGEiEEBxETFDFhcYHB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIRIf/aAAwDAQACEQMRAD8Ae7UMii29XiOakieeOtAyfiBaOh3eotP2aR4tTLxav1+42e5xJdGkE4tP7ENmlKVNeriTxMxyfeKPHYqDVJ//2Q==",
    name: "freestocks-9U.jpg",
  },
  {
    aspectRatio: 0.75,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPAAsDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgAH/8QAIBAAAQMEAgMAAAAAAAAAAAAAAQIEEQADBhIFQSEjcf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIREv/aAAwDAQACEQMRAD8ARLzJDJbZtuEbmIpAMmugQiCnrzWF848Nx7aWAPX3UMgcgQFqj7Raka/CGE//2Q==",
    name: "image0.jpeg",
  },
  {
    aspectRatio: 0.75,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPAAsDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgf/xAAhEAABAwQBBQAAAAAAAAAAAAABAgMEAAURIQYSExQxMv/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGREBAAMBAQAAAAAAAAAAAAAAAQACESED/9oADAMBAAIRAxEAPwCfTlTrNZ4UwPBzyflJNEXuRkOq7sVkrzs0yTa3I9oYNzfMhJ1HbPoUQlqhCS4HISOrO8VPW6KBuRvSleJzZ//Z",
    name: "image2.jpeg",
  },
  {
    aspectRatio: 0.75,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPAAsDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgQH/8QAHxAAAQQCAgMAAAAAAAAAAAAAAQIDBBEABRMiITVh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAbEQACAgMBAAAAAAAAAAAAAAABAgMRACFBgf/aAAwDAQACEQMRAD8AFsaiVopy25gSbBPXzhOfI3Dk15YUQCo0M0Hd+xrlUpd9iclMRskkgWfmEsQsnKHlBiVBer7rzP/Z",
    name: "image7.jpeg",
  },
  {
    aspectRatio: 1.6,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAJAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAACAYH/8QAIhAAAQMDAwUAAAAAAAAAAAAAAQIDBAAGBxEhcgUSFDU2/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AK1g5b8YreeiJSBqTvrWdTr9uKPcUgudRSxPSOxayDuKT7/q3uFCTJn2U/lQf//Z",
    name: "ladki.jpg",
  },
  {
    aspectRatio: 0.67,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAXAA8DASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFBv/EACAQAAEEAgMAAwAAAAAAAAAAAAECAwQFABEGEiEjMlH/xAAWAQEBAQAAAAAAAAAAAAAAAAADAQX/xAAeEQAABQUBAAAAAAAAAAAAAAAAAQIDEQQSFCExIv/aAAwDAQACEQMRAD8AWTSWNVyJyqizWnChHYOn0YsxVOXofZk2cRiYyvXRegCP3Isrl7NdaNqjJW84yOq1qV9shcZshLvJpng/OStJ3ojC9XROhpKoXEME6aejEz5LrUt1ROypW8YoZK1Ty6okBKdeYYZS6FcqHMe2dD//2Q==",
    name: "michael-dam-mEZ3PoFGs_k-unsplash.jpg",
  },
  {
    aspectRatio: 1.78,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAHxAAAQMDBQAAAAAAAAAAAAAAAgABAwQFBhITITFR/8QAFAEBAAAAAAAAAAAAAAAAAAAABv/EABoRAAICAwAAAAAAAAAAAAAAAAECAAMEITH/2gAMAwEAAhEDEQA/AM9xrE5KsXaUWeEuy8UG92yioZZB3WkET08IiTltchbHvey0qTP/2Q==",
    name: "peizaj.jpg",
  },
  {
    aspectRatio: 2.12,
    base64:
      "/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAHAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUG/8QAHhAAAgMAAQUAAAAAAAAAAAAAAQIAAwQGBxESFEH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABoRAAICAwAAAAAAAAAAAAAAAAACAQMRFCH/2gAMAwEAAhEDEQA/AM9w7NVo2qLqVs8SCO8qdSL3fevtZalFShVCn5ERb2nbWC5OVZP/2Q==",
    name: "peizaj4.jpg",
  },
];

// /9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAaEAACAwEBAAAAAAAAAAAAAAAAAwECBBEh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIhMf/aAAwDAQACEQMRAD8AsN0unTo6y3jbRAACsKZqz//Z

// /9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAABBAMBAQAAAAAAAAAAAAACAAEDBAURE0Jh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABkRAAMAAwAAAAAAAAAAAAAAAAABAgMRIf/aAAwDAQACEQMRAD8ApsRYlnt5ntI5875gG/IsI6ZviIicPgsy1bP/2Q==

// /9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAJAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUG/8QAJhAAAgIBAgQHAQAAAAAAAAAAAQIDEQUABgQxNnEHEiJBUWGxsv/EABUBAQEAAAAAAAAAAAAAAAAAAAIE/8QAGxEBAAICAwAAAAAAAAAAAAAAAQIDACEEEaH/2gAMAwEAAhEDEQA/ANvu/KNh8OssALTu4CootmA9TBR80K+r1F2PmRnsZJxnkSOKWRpoo1BpEYmluqPL25G9B3z1xtnu/wCHQ/Bnorhuy/yNEktzlltUYcaCG3fvWf/Z

// /9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAJAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQMG/8QAJhAAAQIDBgcAAAAAAAAAAAAAAgABAwQFBgcREnOxExUhNDVBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAIE/8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAAyEE/9oADAMBAAIRAxEAPwDaWuq7UemcQMCiP1ye3ZE2Lq3OJKJHIWFnLFh+I+8jvpXTPZTuu8IeoW6IYm6WWVqnMpA07P/Z

// /9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAJAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUG/8QAJhAAAgIBAgQHAQAAAAAAAAAAAQIDEQUABgQxNnEHEiJBUWGxsv/EABUBAQEAAAAAAAAAAAAAAAAAAAIE/8QAGxEBAAICAwAAAAAAAAAAAAAAAQIDACEEEaH/2gAMAwEAAhEDEQA/ANvu/KNh8OssALTu4CootmA9TBR80K+r1F2PmRnsZJxnkSOKWRpoo1BpEYmluqPL25G9B3z1xtnu/wCHQ/Bnorhuy/yNEktzlltUYcaCG3fvWf/Z

// /9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAJAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUG/8QAJhAAAgIBAgQHAQAAAAAAAAAAAQIDEQUABgQxNnEHEiJBUWGxsv/EABUBAQEAAAAAAAAAAAAAAAAAAAIE/8QAGxEBAAICAwAAAAAAAAAAAAAAAQIDACEEEaH/2gAMAwEAAhEDEQA/ANvu/KNh8OssALTu4CootmA9TBR80K+r1F2PmRnsZJxnkSOKWRpoo1BpEYmluqPL25G9B3z1xtnu/wCHQ/Bnorhuy/yNEktzlltUYcaCG3fvWf/Z

// /9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAAABgIDAQAAAAAAAAAAAAAAAQIDBAUGERITMlH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQADEQL/2gAMAwEAAhEDEQA/ALXEbCVOtcwOY+t7ovZDDXI/DaUN6SXwi2YAAfC5FeZYz//Z

// /9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAABBAMBAQAAAAAAAAAAAAACAAEDBAURE0Jh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABkRAAMAAwAAAAAAAAAAAAAAAAABAgMRIf/aAAwDAQACEQMRAD8ApsRYlnt5ntI5875gG/IsI6ZviIicPgsy1bP/2Q==

// /9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAABBAMBAQAAAAAAAAAAAAACAAEDBAURE0Jh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABkRAAMAAwAAAAAAAAAAAAAAAAABAgMRIf/aAAwDAQACEQMRAD8ApsRYlnt5ntI5875gG/IsI6ZviIicPgsy1bP/2Q==
// /9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgMF/8QAJRAAAQMDAwMFAAAAAAAAAAAAAQIDEQAEBgUxQRJhkQc1QlFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAeEQACAQMFAAAAAAAAAAAAAAABAhEAAwQSITGR8P/aAAwDAQACEQMRAD8AeZTqB0nQX7htSUumEJURsTyPs0dw7IGciXfXFs2lm0dcLjLUjqSBAMgbSeO3eo5486MpxNoOLDSrtBKAowT1gbflYXox7dqCfil5cDgS4uY8DxR1E3o9xVjWkTFVo3MnoxX/2Q==