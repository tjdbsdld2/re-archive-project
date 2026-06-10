# Re:Archive

사진으로 남지 않은 기억을 다시 꺼내 장면 단위로 정리하고, 하나의 아카이브 앨범으로 보관하는 정적 웹사이트입니다.

오래된 일기나 기억의 조각을 입력하면, 기억이 장면별 기록으로 정리되고 `나의 아카이브`에 저장되는 흐름을 발표용 웹 경험으로 구성했습니다. `아카이브 탐색`에서는 공개 아카이브를 이미지와 함께 살펴보고, 같은 앨범 형식의 상세 화면으로 열어볼 수 있습니다.

## 주요 기능

- 홈 / 기억 복원 / 나의 아카이브 / 아카이브 탐색 / 서비스 소개 화면 전환
- 예시 기억 불러오기
- 기억 복원 로딩 화면과 단계별 진행 표시
- 생성 전/후 상태가 나뉘는 `나의 아카이브`
- 앨범 상세 모달과 장면 캐러셀
- 공개 아카이브 카드 이미지 썸네일 및 상세 앨범 보기
- `Memory Film` 탭 유지
- 순수 HTML / CSS / JavaScript로 구현

## 기술 스택

- HTML
- CSS
- JavaScript

외부 라이브러리 없이 동작합니다.

## 파일 구조

```text
re-archive/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── scene01.png
    ├── scene02.png
    ├── scene03.png
    ├── scene04.png
    ├── scene05.png
    ├── public-zoo.png
    ├── public-watermelon.png
    ├── public-ramen.png
    └── archive-film.mp4
```

`archive-film.mp4`는 없어도 사이트가 깨지지 않도록 placeholder가 보이게 되어 있습니다.

## 로컬에서 보기

정적 사이트라서 간단한 로컬 서버만 띄우면 됩니다.

```bash
python3 -m http.server 4173
```

브라우저에서 아래 주소로 열면 됩니다.

```text
http://127.0.0.1:4173
```

## GitHub Pages 배포

이 프로젝트는 GitHub Pages로 배포할 수 있습니다.

1. 저장소에 현재 파일을 푸시합니다.
2. GitHub 저장소의 `Settings`로 이동합니다.
3. `Pages`에서 `Deploy from a branch`를 선택합니다.
4. 브랜치는 `main`, 폴더는 `/ (root)`를 선택합니다.
5. 저장 후 잠시 기다리면 배포됩니다.

Pages 주소 예시는 아래와 같습니다.

```text
https://tjdbsdld2.github.io/re-archive-project/
```