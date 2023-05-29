import { DrinkAllow, LaptopUsage, ReserveUsage, SpaceUsage } from './Hashcode';
import hyungnamHall1 from '../assets/space/1-1.jpg';
import hyungnamHall2 from '../assets/space/1-2.jpg';
import hyungnamHall3 from '../assets/space/1-3.jpg';
import hyungnamBar1 from '../assets/space/2-1.jpg';
import hyungnamBar2 from '../assets/space/2-2.jpg';
import hyungnamBar3 from '../assets/space/2-3.jpg';
import chang1 from '../assets/space/3-1.jpg';
import chang2 from '../assets/space/3-2.jpg';
import chang3 from '../assets/space/3-3.jpg';
import ssugether1 from '../assets/space/4-1.jpg';
import ssugether2 from '../assets/space/4-2.jpg';
import ssugether3 from '../assets/space/4-3.jpg';
import media1 from '../assets/space/5-1.jpg';
import terrace1 from '../assets/space/6-1.jpg';
import zerozero1 from '../assets/space/7-1.jpg';
import zerozero2 from '../assets/space/7-2.jpg';

const SpaceData = [
  {
    id: 0,
    name: '조만식 기념관 3층',
    building: {
      id: 10,
      name: '조만식기념관',
    },
    location: '조만식 기념관 3층 계단 옆, 엘레베이터 앞',
    photo: [
      {
        rows: 2,
        cols: 3,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A9%E1%84%86%E1%85%A1%E1%86%AB%E1%84%89%E1%85%B5%E1%86%A83%E1%84%8E%E1%85%B3%E1%86%BC.jpeg',
      },
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A93-1.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A93-2.jpeg',
    ],
    time: '6:00 ~ 22:00',
    seat: 48,
    restrict: '없음',
    spaceUsage: [SpaceUsage.LAPTOP, SpaceUsage.CHARGE, SpaceUsage.COMMUNITY],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 1,
    name: '형남홀',
    building: {
      id: 16,
      name: '형남공학관',
    },
    location: '형남공학관 3층',
    photo: [{ rows: 2, cols: 3, src: hyungnamHall1 }, hyungnamHall2, hyungnamHall3],
    time: '24시간',
    seat: 100,
    restrict: '없음',
    spaceUsage: [SpaceUsage.CHARGE, SpaceUsage.LAPTOP, SpaceUsage.COMMUNITY],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.FALSE,
  },
  {
    id: 2,
    name: '형남공학관 바테이블',
    building: {
      id: 16,
      name: '형님공학관',
    },
    location: '형남공학관 모든 층',
    photo: [{ rows: 2, cols: 3, src: hyungnamBar1 }, hyungnamBar2, hyungnamBar3],
    time: '24시간 사용 가능',
    seat: 60,
    restrict: '없음',
    spaceUsage: [SpaceUsage.CHARGE, SpaceUsage.LAPTOP],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.FALSE,
  },
  {
    id: 3,
    name: '기계창',
    location: '정보과학관 1층',
    building: {
      id: 9,
      name: '정보과학관',
    },
    photo: [{ rows: 2, cols: 3, src: chang1 }, chang2, chang3],
    time: '10:00 ~ 17:00',
    seat: 74,
    restrict: 'IT대학 학생만 출입 가능',
    spaceUsage: [
      SpaceUsage.CHARGE,
      SpaceUsage.LAPTOP,
      SpaceUsage.QUIET,
      SpaceUsage.STUDYROOM,
      SpaceUsage.STUDY,
    ],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 4,
    name: '슈게더',
    location: '정보과학관 지하 1층',
    building: {
      id: 9,
      name: '정보과학관',
    },
    photo: [{ rows: 2, cols: 3, src: ssugether1 }, ssugether2, ssugether3],
    time: '10:00 ~ 21:00',
    seat: 75,
    restrict: '컴퓨터학부, 소프트웨어학부 출입 가능',
    spaceUsage: [
      SpaceUsage.CHARGE,
      SpaceUsage.LAPTOP,
      SpaceUsage.QUIET,
      SpaceUsage.STUDYROOM,
      SpaceUsage.STUDY,
    ],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 5,
    name: '미디어 카페',
    location: '정보과학관 지하 1층',
    building: {
      id: 9,
      name: '정보과학관',
    },
    photo: [{ rows: 2, cols: 4, src: media1 }],
    time: '24시간 사용 가능',
    seat: 20,
    restrict: '글로벌미디어학부, 미디어경영학부 출입 가능',
    spaceUsage: [
      SpaceUsage.CHARGE,
      SpaceUsage.LAPTOP,
      SpaceUsage.QUIET,
      SpaceUsage.STUDYROOM,
      SpaceUsage.STUDY,
    ],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 6,
    name: '테라스',
    location: '정보과학관 2층, 3층, 4층, 5층',
    building: {
      id: 9,
      name: '정보과학관',
    },
    photo: [{ rows: 2, cols: 4, src: terrace1 }],
    time: '07:00 ~ 22:00',
    seat: 360,
    restrict: '2, 3층은 컴퓨터학부/소프트웨어학부만 사용 가능, 5층은 글로벌미디어학부만 사용 가능',
    spaceUsage: [SpaceUsage.CHARGE, SpaceUsage.LAPTOP, SpaceUsage.STUDYROOM, SpaceUsage.STUDY],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 7,
    name: '001',
    location: '정보과학관 지하 1층',
    building: {
      id: 9,
      name: '정보과학관',
    },
    photo: [
      { rows: 2, cols: 2, src: zerozero1 },
      { rows: 2, cols: 2, src: zerozero2 },
    ],
    time: '24시간 사용 가능',
    seat: 30,
    restrict: '컴퓨터학부 소모임 하라오름, 슈벨롭, sccc, 스플럭, 에이스만 사용 가능',
    spaceUsage: [
      SpaceUsage.CHARGE,
      SpaceUsage.LAPTOP,
      SpaceUsage.STUDYROOM,
      SpaceUsage.STUDY,
      SpaceUsage.COMMUNITY,
    ],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 8,
    name: '로비',
    location: '도서관 1층',
    building: {
      id: 11,
      name: '중앙도서관',
    },
    photo: [
      {
        rows: 2,
        cols: 2,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A9%E1%84%89%E1%85%A5%E1%84%80%E1%85%AA%E1%86%AB_1%E1%84%8E%E1%85%B3%E1%86%BC.jpeg',
      },
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%83%E1%85%A91-2.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%83%E1%85%A91-3.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%83%E1%85%A91-4.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%83%E1%85%A91-5.jpeg',
    ],
    time: '06:30 ~ 22:00',
    seat: 27,
    restrict: '없음',
    spaceUsage: [
      SpaceUsage.QUIET,
      SpaceUsage.CHARGE,
      SpaceUsage.LAPTOP,
      SpaceUsage.STUDYROOM,
      SpaceUsage.STUDY,
      SpaceUsage.COMMUNITY,
    ],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 9,
    name: '숭실스퀘어',
    location: '도서관 1층',
    building: {
      id: 11,
      name: '중앙도서관',
    },
    photo: [
      {
        rows: 2,
        cols: 2,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%AE%E1%86%BC%E1%84%89%E1%85%B5%E1%86%AF%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B0%E1%84%8B%E1%85%A5.jpeg',
      },
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%83%E1%85%A92-1.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%83%E1%85%A92-2.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%83%E1%85%A92-3.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%83%E1%85%A92-4.jpeg',
    ],
    time: '06:30 ~ 22:00',
    seat: 80,
    restrict: '없음',
    spaceUsage: [
      SpaceUsage.QUIET,
      SpaceUsage.CHARGE,
      SpaceUsage.LAPTOP,
      SpaceUsage.STUDYROOM,
      SpaceUsage.STUDY,
    ],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 10,
    name: '세미나룸',
    location: '도서관 1층 숭실스퀘어',
    building: {
      id: 11,
      name: '중앙도서관',
    },
    photo: [
      {
        rows: 2,
        cols: 4,
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
      },
    ],
    time: '9:00 ~ 21:00 (평일), 9:00 ~ 15:00 (토요일)',
    seat: 50,
    restrict: '없음',
    spaceUsage: [
      SpaceUsage.QUIET,
      SpaceUsage.CHARGE,
      SpaceUsage.LAPTOP,
      SpaceUsage.STUDYROOM,
      SpaceUsage.STUDY,
    ],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_TRUE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 11,
    name: '숭실스퀘어 ON',
    location: '도서관 2층',
    building: {
      id: 11,
      name: '중앙도서관',
    },
    photo: [
      {
        rows: 2,
        cols: 2,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%AE%E1%86%BC%E1%84%89%E1%85%B5%E1%86%AFON.jpeg',
      },
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%AE%E1%86%BC%E1%84%8B%E1%85%A9%E1%86%AB-1.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%AE%E1%86%BC%E1%84%8B%E1%85%A9%E1%86%AB-2.png',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%AE%E1%86%BC%E1%84%8B%E1%85%A9%E1%86%AB-3.png',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%AE%E1%86%BC%E1%84%8B%E1%85%A9%E1%86%AB-4.jpeg',
    ],
    time: '9:00 ~ 22:00 (평일), 9:00 ~ 17:00 (주말)',
    seat: 50,
    restrict: '없음',
    spaceUsage: [
      SpaceUsage.QUIET,
      SpaceUsage.CHARGE,
      SpaceUsage.LAPTOP,
      SpaceUsage.STUDYROOM,
      SpaceUsage.STUDY,
    ],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_TRUE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 12,
    name: '오픈 열람실',
    location: '도서관 2층 왼쪽',
    building: {
      id: 11,
      name: '중앙도서관',
    },
    photo: [
      {
        rows: 2,
        cols: 4,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A9%E1%84%91%E1%85%B3%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%AF%E1%84%85%E1%85%A1%E1%86%B7%E1%84%89%E1%85%B5%E1%86%AF.jpeg',
      },
    ],
    time: '06:00 ~ 23:30',
    seat: 232,
    restrict: '없음',
    spaceUsage: [
      SpaceUsage.QUIET,
      SpaceUsage.CHARGE,
      SpaceUsage.LAPTOP,
      SpaceUsage.STUDYROOM,
      SpaceUsage.STUDY,
    ],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_TRUE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 13,
    name: '사회과학자료실',
    location: '도서관 3층',
    building: {
      id: 11,
      name: '중앙도서관',
    },
    photo: [
      {
        rows: 2,
        cols: 4,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%A1%E1%84%92%E1%85%AC%E1%84%80%E1%85%AA%E1%84%92%E1%85%A1%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AF.jpeg',
      },
    ],
    time: '9:00 ~ 22:00 (평일), 9:00 ~ 17:00 (토요일)',
    seat: 50,
    restrict: '없음',
    spaceUsage: [
      SpaceUsage.QUIET,
      SpaceUsage.CHARGE,
      SpaceUsage.LAPTOP,
      SpaceUsage.STUDYROOM,
      SpaceUsage.STUDY,
    ],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 14,
    name: '자연과학자료실',
    location: '도서관 3층',
    building: {
      id: 11,
      name: '중앙도서관',
    },
    photo: [
      {
        rows: 2,
        cols: 3,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%80%E1%85%AA%E1%84%92%E1%85%A1%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AF.jpeg',
      },
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%83%E1%85%A9%E1%84%8C%E1%85%A1-1.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%83%E1%85%A9%E1%84%8C%E1%85%A1-2.jpeg',
    ],
    time: '9:00 ~ 22:00 (평일), 9:00 ~ 17:00 (토요일)',
    seat: 50,
    restrict: '없음',
    spaceUsage: [
      SpaceUsage.QUIET,
      SpaceUsage.CHARGE,
      SpaceUsage.LAPTOP,
      SpaceUsage.STUDYROOM,
      SpaceUsage.STUDY,
    ],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 15,
    name: '쉼터',
    location: '도서관 3층',
    building: {
      id: 11,
      name: '중앙도서관',
    },
    photo: [
      {
        rows: 2,
        cols: 2,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B1%E1%86%B7%E1%84%90%E1%85%A5.jpeg',
      },
      {
        cols: 2,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B1%E1%86%B71.jpeg',
      },
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B1%E1%86%B72.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B1%E1%86%B73.jpeg',
    ],

    time: '9:00 ~ 22:00',
    seat: 22,
    restrict: '없음',
    spaceUsage: [
      SpaceUsage.CHARGE,
      SpaceUsage.LAPTOP,
      SpaceUsage.STUDYROOM,
      SpaceUsage.STUDY,
      SpaceUsage.COMMUNITY,
    ],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 16,
    name: '인문과학자료실1',
    location: '도서관 4층',
    building: {
      id: 11,
      name: '중앙도서관',
    },
    photo: [
      {
        rows: 2,
        cols: 2,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%AA%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD%E1%84%89%E1%85%B5%E1%86%AF.jpeg',
      },
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%A11.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%A12.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%A13.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%A14.jpeg',
    ],
    time: '09:00 ~ 22:00 (평일), 9:00 ~ 15:00 (토요일)',
    seat: 168,
    restrict: '없음',
    spaceUsage: [
      SpaceUsage.QUIET,
      SpaceUsage.CHARGE,
      SpaceUsage.LAPTOP,
      SpaceUsage.STUDYROOM,
      SpaceUsage.STUDY,
    ],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 17,
    name: '박사열람실',
    location: '도서관 4층',
    building: {
      id: 11,
      name: '중앙도서관',
    },
    photo: [
      {
        rows: 2,
        cols: 4,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%87%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A1%E1%84%8B%E1%85%A7%E1%86%AF%E1%84%85%E1%85%A1%E1%86%B7%E1%84%89%E1%85%B5%E1%86%AF.jpeg',
      },
    ],
    time: '06:00 ~ 23:30',
    seat: 62,
    restrict: '대학원생만 사용가능',
    spaceUsage: [
      SpaceUsage.QUIET,
      SpaceUsage.CHARGE,
      SpaceUsage.LAPTOP,
      SpaceUsage.STUDYROOM,
      SpaceUsage.STUDY,
    ],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_TRUE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 18,
    name: '문학자료실',
    location: '도서관 5층',
    building: {
      id: 11,
      name: '중앙도서관',
    },
    photo: [
      {
        rows: 2,
        cols: 2,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AB%E1%84%92%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD%E1%84%89%E1%85%B5%E1%86%AF.jpeg',
      },
      {
        cols: 2,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AB-1.jpeg',
      },
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AB-2.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%AE%E1%86%AB-3.jpeg',
    ],
    time: '09:00 ~ 22:00 (평일), 9:00 ~ 15:00 (토요일)',
    seat: 120,
    restrict: '없음',
    spaceUsage: [
      SpaceUsage.QUIET,
      SpaceUsage.CHARGE,
      SpaceUsage.LAPTOP,
      SpaceUsage.STUDYROOM,
      SpaceUsage.STUDY,
    ],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 19,
    name: '마루열람실',
    location: '도서관 6층',
    building: {
      id: 11,
      name: '중앙도서관',
    },
    photo: [
      {
        rows: 2,
        cols: 4,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A1%E1%84%85%E1%85%AE%E1%84%8B%E1%85%A7%E1%86%AF%E1%84%85%E1%85%A1%E1%86%B7%E1%84%89%E1%85%B5%E1%86%AF.jpeg',
      },
    ],
    time: '06:00 ~ 23:30',
    seat: 468,
    restrict: '없음',
    spaceUsage: [
      SpaceUsage.QUIET,
      SpaceUsage.CHARGE,
      SpaceUsage.LAPTOP,
      SpaceUsage.STUDYROOM,
      SpaceUsage.STUDY,
    ],
    laptopUsage: LaptopUsage.LAPTOP_FALSE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.FALSE,
  },
  {
    id: 20,
    name: '숭실마루',
    location: '도서관 6층',
    building: {
      id: 11,
      name: '중앙도서관',
    },
    photo: [
      {
        rows: 2,
        cols: 2,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%AE%E1%86%BC%E1%84%89%E1%85%B5%E1%86%AF%E1%84%86%E1%85%A1%E1%84%85%E1%85%AE.png',
      },
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A1-1.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A1-2.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A1-3.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A1-4.jpeg',
    ],
    time: '09:00 ~ 22:00 (평일), 9:00 ~ 15:00 (토요일)',
    seat: 117,
    restrict: '없음',
    spaceUsage: [SpaceUsage.CHARGE, SpaceUsage.LAPTOP, SpaceUsage.STUDY, SpaceUsage.COMMUNITY],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 21,
    name: '정기간행물실',
    location: '도서관 6층',
    building: {
      id: 11,
      name: '중앙도서관',
    },
    photo: [
      {
        rows: 2,
        cols: 3,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%80%E1%85%B5%E1%84%80%E1%85%A1%E1%86%AB%E1%84%92%E1%85%A2%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AF%E1%84%89%E1%85%B5%E1%86%AF.jpeg',
      },
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%A1%E1%86%AB-1.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%A1%E1%86%AB-2.jpeg',
    ],

    time: '09:00 ~ 22:00 (평일), 9:00 ~ 15:00 (토요일)',
    seat: 50,
    restrict: '없음',
    spaceUsage: [SpaceUsage.CHARGE, SpaceUsage.LAPTOP, SpaceUsage.STUDY, SpaceUsage.COMMUNITY],
    laptopUsage: LaptopUsage.LAPTOP_FALSE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 22,
    name: '1층 공부 및 휴식 공간',
    location: '미래관 1층',
    building: {
      id: 1,
      name: '미래관',
    },
    photo: [
      {
        rows: 2,
        cols: 2,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%B5%E1%84%85%E1%85%A2%E1%84%80%E1%85%AA%E1%86%AB.jpeg',
      },
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A1-1.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A1-2.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A1-3.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A1-4.jpeg',
    ],
    time: '08:00 ~ 18:00',
    seat: 30,
    restrict: '없음',
    spaceUsage: [SpaceUsage.CHARGE, SpaceUsage.LAPTOP, SpaceUsage.QUIET],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 23,
    name: '신양관 앞 휴식 공간',
    building: {
      id: 6,
      name: '신양관',
    },
    location: '신양관 야외테이블',
    photo: [
      {
        rows: 2,
        cols: 3,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%A3%E1%86%BC%E1%84%80%E1%85%AA%E1%86%AB.jpeg',
      },
      {
        cols: 1,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%86%AB-1.jpeg',
      },
      {
        cols: 1,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B5%E1%86%AB-2.jpeg',
      },
    ],
    time: '24시간 사용 가능',
    seat: 6,
    restrict: '없음',
    spaceUsage: [SpaceUsage.LAPTOP, SpaceUsage.COMMUNITY],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 24,
    name: '숭실 포레스트',
    building: {
      id: 8,
      name: '웨스트민스터홀',
    },
    location: '웨스트민스터홀',
    photo: [
      {
        rows: 2,
        cols: 2,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%AE%E1%86%BC%E1%84%91%E1%85%A9.jpeg',
      },
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B01-1.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B01-2.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B01-3.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B01-4.jpeg',
    ],

    time: '08:00 ~ 18:00',
    seat: 63,
    restrict: '없음',
    spaceUsage: [SpaceUsage.LAPTOP, SpaceUsage.QUIET, SpaceUsage.CHARGE],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 25,
    name: '2층 공부 및 휴식 공간',
    building: {
      id: 8,
      name: '웨스트민스터홀',
    },
    location: '웨스트민스터홀',
    photo: [
      {
        rows: 2,
        cols: 2,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B0%E1%84%86%E1%85%B5%E1%86%AB2%E1%84%8E%E1%85%B3%E1%86%BC.jpeg',
      },
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B02-1.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B02-2.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B02-3.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B02-4.jpeg',
    ],
    time: '08:00 ~ 18:00',
    seat: 26,
    restrict: '없음',
    spaceUsage: [SpaceUsage.LAPTOP, SpaceUsage.COMMUNITY, SpaceUsage.CHARGE],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 26,
    name: '3층 카페 331',
    location: '웨스트민스터홀',
    building: {
      id: 8,
      name: '웨스트민스터홀',
    },
    photo: [
      {
        rows: 2,
        cols: 3,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B0%E1%84%86%E1%85%B5%E1%86%AB3%E1%84%8E%E1%85%B3%E1%86%BC.jpeg',
      },
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B03-1.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B03-2.jpeg',
    ],
    time: '10:00 ~ 19:00',
    seat: 46,
    restrict: '없음',
    spaceUsage: [SpaceUsage.LAPTOP, SpaceUsage.CHARGE, SpaceUsage.COMMUNITY],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 27,
    name: '4층 공부 및 휴식 공간',
    location: '웨스트민스터홀',
    building: {
      id: 8,
      name: '웨스트민스터홀',
    },
    photo: [
      {
        rows: 2,
        cols: 3,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B0%E1%84%86%E1%85%B5%E1%86%AB4%E1%84%8E%E1%85%B3%E1%86%BC.jpeg',
      },
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B04-1.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B04-2.jpeg',
    ],
    time: '08:00 ~ 18:00',
    seat: 30,
    restrict: '없음',
    spaceUsage: [SpaceUsage.LAPTOP, SpaceUsage.CHARGE, SpaceUsage.COMMUNITY],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 28,
    name: '조만식 기념관 1층',
    location: '웨스트민스터홀과 조만식기념관 건물이 이어지는 1층',
    building: {
      id: 10,
      name: '조만식기념관',
    },
    photo: [
      {
        rows: 2,
        cols: 2,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A9%E1%84%86%E1%85%A1%E1%86%AB%E1%84%89%E1%85%B5%E1%86%A81%E1%84%8E%E1%85%B3%E1%86%BC.jpeg',
      },
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A91-1.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A91-2.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A91-3.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A91-4.jpeg',
    ],

    time: '6:00 ~ 18:00',
    seat: 66,
    restrict: '없음',
    spaceUsage: [SpaceUsage.LAPTOP, SpaceUsage.CHARGE, SpaceUsage.COMMUNITY],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
  {
    id: 29,
    name: '조만식 기념관 2층',
    location: '조만식 기념관 2층 계단 옆, 엘레베이터 앞',
    building: {
      id: 10,
      name: '조만식기념관',
    },
    photo: [
      {
        rows: 2,
        cols: 2,
        src: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A9%E1%84%86%E1%85%A1%E1%86%AB%E1%84%89%E1%85%B5%E1%86%A82%E1%84%8E%E1%85%B3%E1%86%BC.jpeg',
      },
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A92-1.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A92-2.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A92-3.jpeg',
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A92-4.jpeg',
    ],
    time: '6:00 ~ 22:00',
    seat: 40,
    restrict: '없음',
    spaceUsage: [SpaceUsage.LAPTOP, SpaceUsage.CHARGE, SpaceUsage.COMMUNITY],
    laptopUsage: LaptopUsage.LAPTOP_TRUE,
    reserveUsage: ReserveUsage.RESERVE_FALSE,
    drinkallow: DrinkAllow.TRUE,
  },
];

export default SpaceData;
