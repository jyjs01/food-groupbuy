# Food-GroupBuy

Food-GroupBuy는 과일·채소·밀키트 등 다양한 식자재와 먹거리를 **공동구매**할 수 있는 서비스를 제공합니다.  
본 프로젝트는 제공된 API에서 상품 데이터를 받아 **정렬/품절 처리/로딩 UX** 요구사항에 맞춰 사용자에게 표시하는 Next.js 웹 페이지입니다.

<br />

## 기능

- API 상품 목록 조회
- **index 오름차순 정렬**
- **품절 상품(soldOut)은 최하단으로 분리**
- image가 `null`이어도 **이미지 영역(공간) 확보**
- 응답 지연(1~5초)을 고려한 **로딩 UI**
- **새로고침**(refetch) 시에도 로딩 표시

<br />

## 기술 스택

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **React-Query**
- **axios**