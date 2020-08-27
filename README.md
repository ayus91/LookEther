
<p align="center">
<img src=https://user-images.githubusercontent.com/55651378/91380244-8474b680-e85f-11ea-8989-c9bbe097ac6c.png>
</p>

# LookEther
- LookEther는 날씨에 따라 옷차림을 추천해주는 프로젝트입니다. 추위를 많이 타는 사람, 그렇지 않은 사람들을 위해 옷을 추천을 해준다면,실생활에서 편리하게 사용가능하지 않을까? 하는 생각으로부터 출발하여 프로젝트를 시작하게 되었습니다.


## Stack

- Front-end : React, React-Router Bootstrap, AWS
- Back-end : Node.js(multer) , Express, Sequelize, AWS

## Usage

### Main Page

<img src=https://user-images.githubusercontent.com/55651378/91382354-88ef9e00-e864-11ea-8626-c15ec43bd029.png >

 - 날씨 정보와 옷차림을 아이콘으로 표시해주는 Main Page 입니다.
 - 누구나 날씨에 대한 정보를 받을 수 있도록 로그인 없이 접근이 가능하도록 하였습니다.
 - OpenWeatherMap API와 좌표를 이용하여 날씨와 기온에 대해 볼 수 있습니다.
  - 오늘의 날씨를 실시간으로 반영하여 날씨에 대한 아이콘, 현재온도, 최고/최저 온도, 강수량, 체감온도 출력
  - 일주일간의 최고/최저 온도와 날씨 아이콘 출력
- 기온에 따른 추천 옷차림 아이콘을 볼 수 있습니다.
  - 파일 업로드를 통해 사용자의 옷차림을 직접 업로드 할 수 있습니다.(업로드 된 옷차림 출력 및 사용자가 직접 평가기능 구현 예정)
- Sign In을 선택하면 로그인 및 회원 가입 페이지로 이동합니다.
 
### Geolocation API

<img src=https://user-images.githubusercontent.com/55651378/91387177-a8d88f00-e86f-11ea-95d7-89ac82dfb56b.png>
<img src=https://user-images.githubusercontent.com/55651378/91387180-ab3ae900-e86f-11ea-997a-796f0310d1ac.png>

- 웹브라우저에서 Geolocation API를 이용하여 위치정보 동의후 좌표를 이용하여 지역명을 볼 수 있습니다.

### Sign UP 

<img src=https://user-images.githubusercontent.com/55651378/91387909-38cb0880-e871-11ea-80c7-15a7b67c7ad5.gif>

### Sign In

<img src=https://user-images.githubusercontent.com/55651378/91387822-04efe300-e871-11ea-8e42-b20999b3f834.gif>

### Stay signed / Sign Out
<img src=https://user-images.githubusercontent.com/55651378/91387973-61eb9900-e871-11ea-985d-abef5d1a5d09.gif>

### Upload

<img width=550 src=https://user-images.githubusercontent.com/55651378/91388278-f229de00-e871-11ea-9c1c-e6c056b4c6d0.gif>
- Local 업로드이며, 파일 첨부 또는 Drag & Drop으로 가능합니다.

<img src=https://user-images.githubusercontent.com/55651378/91388392-2b624e00-e872-11ea-964f-24c40d4cfd55.gif>
-S3 버켓과 서버 통신을 통해 업로드 된 파일에 대해 정상 업로드가 되었음을 확인 할 수 있습니다.


