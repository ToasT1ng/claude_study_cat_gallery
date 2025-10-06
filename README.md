# 🐱 고양이 갤러리 (Cat Gallery)

React로 만든 귀여운 고양이 이미지 갤러리 웹 애플리케이션입니다.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://toast1ng.github.io/claude_study_cat_gallery/)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![The Cat API](https://img.shields.io/badge/API-The%20Cat%20API-orange)](https://thecatapi.com/)

## 📸 스크린샷

실시간 고양이 이미지 갤러리로, 매번 새로운 고양이들을 만나볼 수 있습니다!

## ✨ 주요 기능

- **🔄 실시간 고양이 이미지 로딩**: The Cat API를 통해 랜덤한 고양이 사진 12장을 가져옵니다
- **❤️ 즐겨찾기 기능**: 마음에 드는 고양이를 하트 버튼으로 즐겨찾기할 수 있습니다
- **🔍 검색 기능**: 고양이 ID로 검색할 수 있습니다
- **📚 고양이 사실**: 고양이에 대한 재미있는 사실을 랜덤으로 표시합니다
- **📱 반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 화면을 제공합니다
- **🎨 애니메이션**: 부드러운 호버 효과와 카드 애니메이션

## 🛠️ 기술 스택

- **Frontend Framework**: React 18.x
- **스타일링**: CSS3 (Grid, Flexbox, Animations)
- **API**: [The Cat API](https://thecatapi.com/)
- **배포**: GitHub Pages
- **빌드 도구**: Create React App
- **개발 도구**: Claude Code

## 🚀 시작하기

### 사전 요구사항

- Node.js (v14 이상)
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/ToasT1ng/claude_study_cat_gallery.git

# 프로젝트 디렉터리로 이동
cd claude_study_cat_gallery

# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

개발 서버가 시작되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

### 프로덕션 빌드

```bash
# 프로덕션 빌드 생성
npm run build
```

빌드된 파일은 `build` 폴더에 생성됩니다.

## 📁 프로젝트 구조

```
cat-gallery/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── CatCard.js          # 고양이 카드 컴포넌트
│   │   ├── CatCard.css
│   │   ├── CatFacts.js         # 고양이 사실 컴포넌트
│   │   ├── CatFacts.css
│   │   ├── SearchBar.js        # 검색바 컴포넌트
│   │   └── SearchBar.css
│   ├── App.js                  # 메인 앱 컴포넌트
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🎯 컴포넌트 설명

### App.js
메인 애플리케이션 컴포넌트로, 상태 관리와 API 호출을 담당합니다.

**주요 기능:**
- The Cat API에서 고양이 이미지 가져오기
- 즐겨찾기 상태 관리
- 검색 기능
- 로딩 상태 관리

### CatCard.js
개별 고양이 이미지를 표시하는 카드 컴포넌트입니다.

**주요 기능:**
- 이미지 로딩 상태 표시
- 즐겨찾기 토글 버튼
- 호버 애니메이션
- 고양이 품종 정보 표시 (있을 경우)

### CatFacts.js
고양이에 대한 재미있는 사실을 표시하는 컴포넌트입니다.

**주요 기능:**
- 랜덤 사실 표시
- 새로운 사실 보기 버튼
- 부드러운 전환 효과

### SearchBar.js
고양이 ID로 검색할 수 있는 검색바 컴포넌트입니다.

**주요 기능:**
- 실시간 검색
- 검색어 초기화 버튼

## 🌐 배포

이 프로젝트는 GitHub Pages에 배포되어 있습니다.

**배포 URL**: [https://toast1ng.github.io/claude_study_cat_gallery/](https://toast1ng.github.io/claude_study_cat_gallery/)

### 배포 방법

```bash
# gh-pages 패키지 설치
npm install gh-pages --save-dev

# 배포
npm run deploy
```

## 📝 API 사용

이 프로젝트는 [The Cat API](https://thecatapi.com/)를 사용합니다.

**엔드포인트:**
```
https://api.thecatapi.com/v1/images/search?limit=12
```

- `limit`: 한 번에 가져올 이미지 개수

## 🎨 주요 스타일링 특징

- **그라디언트 배경**: 보라색 계열의 부드러운 그라디언트
- **카드 애니메이션**: 호버 시 카드가 위로 떠오르는 효과
- **로딩 스피너**: 고양이 이미지 로딩 중 표시
- **반응형 그리드**: auto-fill을 사용한 유연한 그리드 레이아웃
- **스무스한 전환**: CSS transition을 활용한 부드러운 애니메이션

## 🐛 알려진 이슈

- ~~GitHub Pages 배포 시 절대 경로 문제~~ (해결됨)
- React Hook useEffect 경고 (기능에는 영향 없음)

## 🔮 향후 계획

- [ ] 고양이 품종별 필터 기능
- [ ] 무한 스크롤 구현
- [ ] 고양이 이미지 다운로드 기능
- [ ] 다크 모드 지원
- [ ] 로컬 스토리지를 활용한 즐겨찾기 저장

## 💡 개발 노트

이 프로젝트는 **Claude Code**를 활용하여 개발되었습니다. Claude Code는 AI 기반 코딩 어시스턴트로, 프로젝트 구조 설계부터 컴포넌트 구현, 스타일링, 그리고 GitHub Pages 배포까지 전 과정을 지원했습니다.

**Claude Code로 수행한 작업:**
- React 프로젝트 초기 설정
- 컴포넌트 구조 설계 및 구현
- The Cat API 연동
- CSS 애니메이션 및 반응형 디자인
- GitHub Pages 배포 자동화
- 배포 후 경로 문제 해결

## 📄 라이선스

이 프로젝트는 학습 목적으로 만들어졌습니다.

## 👨‍💻 개발자

- **GitHub**: [@ToasT1ng](https://github.com/ToasT1ng)

---

**만든 날짜**: 2025년 10월 6일
