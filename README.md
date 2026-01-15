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

<br />

## 주요 폴더 구조

```txt
app/
  page.tsx                 # 메인 페이지(데이터 조회/상태 분기/새로고침)
  layout.tsx               # 전역 레이아웃/메타데이터
  globals.css              # CSS 변수 및 전역 스타일

  api/
    products/
      route.ts             # 상품 목록 API 라우트

src/
  components/
    Loading.tsx            # 로딩 UI
    Error.tsx              # 에러 UI + 재시도
    ProductGrid.tsx        # 반응형 그리드(1/2/3열)
    ProductCard.tsx        # 상품 카드(이미지 공간/품절 표시/진행바/버튼)

  constants/
    queryKeys.ts           # React Query queryKey 중앙 관리

  lib/
    api.ts                 # API 요청(axios)
    products.ts            # 데이터 가공/정렬/품절 처리
    http.ts                # axios 인스턴스/기본 설정(baseURL, timeout)
    cn.ts                  # className 유틸(클래스 병합/정리)

  styles/
    pages/
      home.ts              # 페이지 전용 스타일
    ui/
      primitives.ts        # 공통 UI 스타일
      
  types/
    product.ts             # ApiProduct / UiProduct 타입
```