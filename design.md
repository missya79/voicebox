---
name: 맘숲놀이
colors:
  background: "#FAF8EC"
  on-background: "#28321F"
  surface: "#FAF8EC"
  surface-dim: "#E8E4D2"
  surface-bright: "#FCFBF3"
  surface-container-lowest: "#FFFFFF"
  surface-container-low: "#F8F6EA"
  surface-container: "#F2EFDD"
  surface-container-high: "#ECE8D3"
  surface-container-highest: "#E6E1C8"
  surface-variant: "#E6E1C8"
  on-surface: "#28321F"
  on-surface-variant: "#5C6350"
  inverse-surface: "#28321F"
  inverse-on-surface: "#FAF8EC"
  outline: "#B7AE8C"
  outline-variant: "#DDD7BD"
  surface-tint: "#3E7452"
  primary-gradient: "linear-gradient(135deg, #4C8A61 0%, #3E7452 55%, #2F5A3E 100%)"
  primary: "#3E7452"
  on-primary: "#FFFFFF"
  primary-container: "#DCECDF"
  on-primary-container: "#1F4A2C"
  secondary: "#F5B93F"
  on-secondary: "#28321F"
  secondary-container: "#FDE8BE"
  on-secondary-container: "#6B4700"
  tertiary: "#B4703C"
  on-tertiary: "#FFFFFF"
  tertiary-container: "#F0DAC4"
  on-tertiary-container: "#5C3414"
  error: "#BA1A1A"
  on-error: "#FFFFFF"
  error-container: "#FFDAD6"
  on-error-container: "#93000A"
  google-white: "#FFFFFF"
  google-border: "#DADCE0"
  google-text: "#3C4043"
typography:
  display:
    fontFamily: "Gaegu, sans-serif"
    fontSize: 42px
    fontWeight: "700"
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: "Gaegu, sans-serif"
    fontSize: 30px
    fontWeight: "700"
    lineHeight: 40px
  headline-md:
    fontFamily: "Gaegu, sans-serif"
    fontSize: 22px
    fontWeight: "700"
    lineHeight: 30px
  title:
    fontFamily: "Pretendard, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: "700"
    lineHeight: 26px
  body-lg:
    fontFamily: "Pretendard, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: "Pretendard, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: "400"
    lineHeight: 24px
  label-button:
    fontFamily: "Pretendard, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: "600"
    lineHeight: 20px
    letterSpacing: 0.02em
  label-meta:
    fontFamily: "Pretendard, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: "500"
    lineHeight: 18px
    letterSpacing: 0.01em
rounded:
  sm: 8px
  DEFAULT: 12px
  md: 16px
  lg: 24px
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  gutter: 16px
  margin: 24px
shadow:
  sm: "0 1px 3px rgba(40, 50, 31, 0.08)"
  md: "0 6px 16px rgba(40, 50, 31, 0.10), 0 2px 6px rgba(62, 116, 82, 0.06)"
  lg: "0 16px 32px rgba(40, 50, 31, 0.14), 0 4px 10px rgba(62, 116, 82, 0.08)"
border:
  hairline: "1px solid {colors.outline-variant}"
  emphasis: "1.5px solid {colors.outline}"
  focus: "2px solid {colors.primary}"
  dashed: "2px dashed {colors.outline-variant}"
breakpoints:
  desktop:
    minWidth: 1024px
    columns: 3
    maxContentWidth: 1200px
    gutter: "{spacing.lg}"
  tablet:
    minWidth: 768px
    maxWidth: 1023px
    columns: 2
    gutter: "{spacing.md}"
  mobile:
    maxWidth: 767px
    columns: 1
    gutter: "{spacing.gutter}"
page:
  header:
    background: "{colors.surface-container-lowest}"
    borderBottom: "{border.hairline}"
    padding: "18px 32px"
    iconSize: 32px
  hero:
    wrapperPadding: "28px 32px 0"
    maxWidth: 1200px
    innerMaxWidth: 600px
    background: "{colors.primary-gradient}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "52px 40px"
    shadow: "{shadow.md}"
  footer:
    background: "{colors.surface-container-low}"
    borderTop: "{border.hairline}"
    padding: "36px 32px 44px"
    textColor: "{colors.on-surface-variant}"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-button}"
    rounded: "{rounded.DEFAULT}"
    padding: "12px 24px"
    shadow: "{shadow.sm}"
  button-primary-hover:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-button}"
    rounded: "{rounded.DEFAULT}"
    padding: "12px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    border: "{border.emphasis}"
    typography: "{typography.label-button}"
    rounded: "{rounded.DEFAULT}"
    padding: "12px 24px"
  button-cta:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-button}"
    rounded: "{rounded.full}"
    padding: "13px 30px"
  button-google:
    backgroundColor: "{colors.google-white}"
    textColor: "{colors.google-text}"
    border: "1px solid {colors.google-border}"
    typography: "{typography.label-button}"
    rounded: "{rounded.DEFAULT}"
    padding: "12px 24px"
    note: "구글 브랜드 가이드 전용 색. primary/secondary를 입히지 않는다."
  status-control:
    layout: "3버튼 세그먼트, hairline 구분선"
    inactiveBorder: "{border.hairline}"
    activeUses: "badge-status-접수 / badge-status-처리중 / badge-status-완료 색을 그대로 채움"
  badge-status-접수:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-meta}"
    fontWeight: "600"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  badge-status-처리중:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.label-meta}"
    fontWeight: "600"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  badge-status-완료:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    typography: "{typography.label-meta}"
    fontWeight: "600"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  badge-category:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
    typography: "{typography.label-meta}"
    rounded: "{rounded.full}"
    padding: "3px 10px"
  category-chip:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.on-background}"
    border: "{border.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: "9px 18px"
  category-chip-active:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    border: "1px solid {colors.tertiary}"
  card-post:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    shadow: "{shadow.sm}"
    photoAspectRatio: "16/9"
  card-post-hover:
    shadow: "{shadow.lg}"
    transform: "translateY(-4px)"
  tab-bar:
    borderBottom: "{border.hairline}"
    gap: "{spacing.lg}"
  tab-item:
    textColor: "{colors.on-surface-variant}"
    fontFamily: "{typography.title.fontFamily}"
    fontSize: "{typography.title.fontSize}"
    fontWeight: "400"
    padding: "12px 4px"
  tab-item-active:
    textColor: "{colors.primary}"
    fontWeight: "700"
    indicator: "2px solid {colors.primary}, 하단 밑줄"
  input-field:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    border: "{border.hairline}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm}"
  input-field-focus:
    border: "{border.focus}"
  input-field-error:
    border: "2px solid {colors.error}"
    helperTextColor: "{colors.error}"
    helperTypography: "{typography.label-meta}"
  textarea-field:
    extends: "input-field"
    minHeight: "160px"
    resize: "vertical"
  file-upload:
    backgroundColor: "{colors.surface-container-low}"
    border: "{border.dashed}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    textColor: "{colors.on-surface-variant}"
  file-upload-preview:
    thumbnailSize: "96px"
    rounded: "{rounded.sm}"
---

## Brand & Style

(주)맘숲놀이는 "마음을 잇는 놀이 — 숲에서 시작해 세계로 이어지는 놀이"를 한 줄 소개로 삼는다. 이 단체가 운영하는 서비스 **우리 동네 목소리함**은 "우리 동네, 말하면 바뀝니다"라는 문구로, 동네 주민이 남긴 의견(글)이 접수 → 처리중 → 완료로 이어지는 흐름을 보여준다.

디자인은 **숲의 차분함**과 **손글씨 같은 다정함**이 함께 느껴지도록 구성한다. 화려하거나 차가운 느낌 대신, 아이와 부모가 편안하게 머무를 수 있는 따뜻한 공간감을 우선한다. 스타일은 자연 소재감이 있는 **모던 내추럴**에 가깝다. 각진 사각형이나 강한 대비 대신, 둥근 모서리와 부드러운 그림자로 "숲속 오두막" 같은 아늑함을 만든다. 아이콘은 `icons/icon-192.png`를 쓴다.

## Colors

- **주색 (Primary, `#3E7452`)** — 숲의 초록. 버튼, 활성 상태, 로고, 핵심 강조에만 사용한다.
- **보조색 (Secondary, `#F5B93F`)** — 햇빛이 스민 노랑. 포인트 배지, 보조 버튼, 소량의 강조 요소에만 쓴다. 배경 전체를 채우지 않는다.
- **배경 (`#FAF8EC`)** — 은은한 크림색. 페이지 기본 배경.
- **글자 (`#28321F`)** — 짙은 숲빛 검정. 본문 글자의 기본색.
- **테두리 (Outline, `#B7AE8C` / Outline-variant, `#DDD7BD`)** — 카드나 입력창의 경계선. 진한 검은색 테두리는 쓰지 않는다.
- **그림자 색**은 순수한 검정이 아니라 글자색(`on-background`)과 주색(`primary`)을 옅게 섞어, 초록빛이 살짝 도는 부드러운 그림자를 만든다 (`shadow` 토큰 참고).
- **surface 계열**은 배경보다 한 톤씩 밝거나 어두운 크림 색상 5단계로, 카드가 배경 위에서 살짝 떠 보이게 한다.
- **primary-gradient**는 주색 계열 3단 그라데이션으로, 히어로 배너 전용이다. 다른 곳(카드, 버튼, 배경 등)에는 쓰지 않는다.
- **google 계열 색(`google-white/border/text`)**은 구글 로그인 버튼 전용 예외 색이다. 브랜드 주색/보조색과 섞지 않는다.

## Typography

제목에는 **Gaegu**(손글씨 느낌의 한글 폰트)를, 본문·메타·버튼에는 **Pretendard**를 쓴다. 손글씨 폰트는 헤드라인처럼 짧고 큰 글자에서만 다정한 느낌을 주고, 긴 문장에서는 가독성이 떨어지므로 본문에는 절대 쓰지 않는다.

네 단계로 고정한다:

| 용도 | 토큰 | 크기 / 굵기 |
|---|---|---|
| 제목 (헤드라인) | `display`, `headline-lg`, `headline-md` | 22–42px / 700 (Gaegu) |
| 제목 (섹션·카드 소제목·탭) | `title` | 18px / 700 (Pretendard) |
| 본문 | `body-lg`, `body-md` | 15–17px / 400 |
| 메타 (날짜·작성자·배지·라벨) | `label-meta` | 13px / 500, `on-surface-variant` 색 |
| 버튼 | `label-button` | 15px / 600, 자간 0.02em |

## Layout & Spacing

간격은 8px 기준 배수 6단계(`xs 4 · sm 8 · md 16 · lg 24 · xl 40 · 2xl 64`)만 쓴다. 임의의 간격 값을 만들지 않는다. 이 규칙은 **요소와 요소 사이 간격**(카드 그리드 gap, 폼 필드 사이, 탭 사이, 카드 안 배지-제목-본문 사이 등)에 적용된다 — 여기는 실제로 전부 6단계 토큰만 쓴다.

버튼·배지·칩·탭처럼 **크기가 작은 개별 컴포넌트 내부의 상하좌우 여백**은 예외다. 알약 모양이 예쁘게 나오려면 8px 배수보다 촘촘한 값이 필요해서, `12px 24px`(버튼), `4px 12px`(상태 배지), `9px 18px`(분야 칩), `12px 4px`(탭) 같은 고정값을 이 문서에 적힌 그대로 쓴다. 새 컴포넌트를 만들 때 이 패딩 값들을 임의로 다시 정하지 말고, 비슷한 크기의 기존 컴포넌트 값을 그대로 따른다.

헤더·히어로·푸터 같은 페이지 골격 요소도 반복되는 컴포넌트가 아니라 화면에 하나뿐인 고정 레이아웃이므로 `page` 토큰의 확정 값을 그대로 쓴다 (아래 페이지 골격 참고).

반응형은 3단으로 고정한다.

- **PC (1024px 이상)** — 3열 그리드, 콘텐츠 최대폭 1200px, 열 간격 `lg`(24px)
- **태블릿 (768–1023px)** — 2열 그리드, 열 간격 `md`(16px)
- **모바일 (767px 이하)** — 1열, 카드가 세로로 쌓임, 열 간격 `gutter`(16px)

모바일에서는 3열·2열을 절대 유지하지 않고 반드시 1열로 전환한다.

## Elevation & Depth

그림자는 `sm · md · lg` 3단계로만 쓴다. 모두 순수 검정이 아니라 글자색과 주색을 섞은 옅은 톤으로, blur를 크게 opacity를 낮게 잡아 "숲 그늘"처럼 부드럽게 퍼지도록 한다.

- `sm` — 게시글 카드 기본 상태, 배지처럼 미세하게 뜬 요소
- `md` — 히어로 배너
- `lg` — 모달, 팝업, 그리고 게시글 카드 호버 상태

게시글 카드는 마우스 오버 시 `shadow.sm`에서 `shadow.lg`로 전환하며 4px 정도 살짝 떠오르는(`translateY(-4px)`) 인터랙션을 쓴다 (`card-post-hover`).

## Shapes

모서리는 `sm 8 · DEFAULT 12 · md 16 · lg 24 · full 9999`px 5단계만 쓴다.

- **버튼(본문 안)** — `DEFAULT`(12px), 손에 잡히는 듯한 부드러움
- **히어로 안 CTA 버튼** — `full`, 알약형으로 강조 (본문 버튼과 구분)
- **게시글 카드** — `lg`(24px), 오두막 같은 넉넉한 둥긂
- **배지·칩** — `full`, 알약 모양
- **입력창·글쓰기 폼 필드** — `DEFAULT`(12px)
- **사진 업로드 영역** — `md`(16px)

테두리는 `hairline`(1px, `outline-variant`)을 기본으로 하고, 입력창 포커스에는 `focus`(2px, `primary`)를 쓴다. 강조가 필요한 곳에만 `emphasis`(1.5px, `outline`)를 쓴다. 사진 업로드 영역에는 `dashed`(2px 점선, `outline-variant`)를 쓴다.

## 페이지 골격 (헤더 · 히어로 · 푸터)

확정한 시안(산뜻조합형)을 기준으로 고정한다. 아래 값은 `간격 6단계` 규칙의 예외로, 이 페이지 골격에서만 쓴다.

**헤더** — `surface-container-lowest` 배경, 하단 `hairline` 테두리, 상하좌우 패딩 `18px 32px`, 아이콘 32×32px(rounded `sm`) + 단체명(`title` 계열, 16px/700). 페이지 최상단에 고정(sticky).

**히어로** — 화면 끝까지 채우는 사각 블록이 아니라, 좌우 `32px` 여백(위 `28px`) 안에서 `rounded.lg` 카드로 띄운다. 배경은 `primary-gradient`, 안쪽 패딩 `52px 40px`, 그림자 `shadow.md`, 최대폭 1200px. 내부 텍스트 폭은 600px로 제한하고 가운데 정렬한다. 흰색 반투명 원형 장식을 배경 위에 1~2개 흐릿하게 겹친다.
- 제목: `display`/`headline` 계열(Gaegu), `clamp(28px, 4vw, 40px)`, 굵기 700 — "우리 동네, 말하면 바뀝니다"
- 설명: `body-md` 계열(15.5px), `primary-container` 색, 최대 2줄
- CTA: `button-cta`(보조색, 알약형) — "의견 남기기"

**푸터** — `surface-container-low` 배경, 상단 `hairline` 테두리, 패딩 `36px 32px 44px`, 가운데 정렬. 단체명(14px/700) + 단체 한 줄 소개(13px, `on-surface-variant`) + 저작권 한 줄(13px)을 세로로 쌓는다.

## Components

### 게시글 카드 (`card-post`)

"글 저장하기"(제목·내용·작성자·작성시간)와 "사진 올리기", 처리상태, 분야를 한 장에 보여주는 이 서비스의 핵심 컴포넌트다.

구조 (위→아래):
1. **사진** — 카드 전체 폭, `16/9` 비율. 사진이 없어도 항상 이 영역을 두고 `surface-container-high` 배경 위에 회색 사진 아이콘 자리표시자를 둔다.
2. **본문 영역** — 안쪽 패딩 `lg`(24px) 동일.
   - 배지 줄: 처리상태 배지 + 분야 배지(`badge-category`), 가로 간격 `sm`(8px)
   - 제목: `title` 토큰(18px/700), 배지 줄과 `md`(16px) 간격
   - 본문 앞부분: `body-md`, 3줄에서 자름(더 길면 "..." 처리), 색 `on-surface-variant`
   - 메타: 작성자(왼쪽) · 작성시간(오른쪽), `label-meta`, 위쪽에 `hairline` 구분선 + `sm`(8px) 패딩
3. 카드 자체는 `rounded.lg`, `shadow.sm` — 여유 있게 배치되는 화면(목록)에서는 호버 시 `card-post-hover`(그림자 `lg` + `-4px`)를 쓴다.

작성시간은 카드에는 날짜만 `YYYY.MM.DD` 형식으로 보여준다(시:분은 상세 화면에서만 필요하면 추가).

그리드는 `breakpoints` 토큰을 그대로 쓴다 — PC 3열 · 태블릿 2열 · 모바일 1열, 간격은 각 단계의 `gutter`.

### 상태 배지 (`badge-status-*`)

처리상태는 접수 → 처리중 → 완료 3가지로 고정이며, 각각 고유 색을 갖는다 (색으로 상태를 바로 구분하기 위함 — 3개를 같은 색으로 통일하지 않는다).

| 상태 | 배경 | 글자색 | 의미 |
|---|---|---|---|
| 접수 | `surface-container-high` | `on-surface-variant` | 중립, 아직 손대지 않음 |
| 처리중 | `secondary-container` | `on-secondary-container` | 진행 중 (보조색 계열) |
| 완료 | `primary-container` | `on-primary-container` | 완료 (주색 계열) |

공통 규격: `rounded.full`, `label-meta` 타이포에 굵기만 600, 패딩 `4px 12px`.

새 글은 저장되는 순간 항상 **접수** 상태로 시작한다. 처리중·완료로의 전환은 관리자만 할 수 있다.

같은 색 매핑을 관리자 화면의 **상태 변경 3버튼**(`status-control`)에도 그대로 쓴다. 세 버튼이 `hairline`로 붙어 있는 세그먼트 형태이며, 현재 상태인 버튼만 해당 배지 색(배경)으로 채우고, 나머지 두 버튼은 배경 없이 테두리(`hairline`)만 있는 비활성 톤에 글자색 `on-surface-variant`를 쓴다. 필터에 쓰이는 "전체"는 상태값이 아니라 필터 칩일 뿐이므로 배지 색을 쓰지 않는다. `status-control`은 게시글 카드나 상세 화면 안, "의견 관리" 탭에서 글마다 붙는다.

### 분야 칩 (`category-chip` / `badge-category`)

분야는 관리자가 "분야 관리" 탭에서 추가·삭제할 수 있어 개수가 계속 늘어날 수 있다. 확정한 시안(여유형 콘텐츠)의 방식을 그대로 쓴다 — 한 줄로 감싸 두다가 넘치면 "더보기"로 펼친다.

- **필터 칩 / 글쓰기 폼의 분야 선택** — `category-chip`: `rounded.full`, `hairline` 테두리, 배경 `surface-container-lowest`, 패딩 `9px 18px`, `body-md` 크기. 선택되면 `category-chip-active`(배경·테두리 `tertiary`, 글자 `on-tertiary`)로 바뀐다. 감싸는 영역은 한 줄(약 46px) 높이로 시작해 "분야 더보기" 버튼을 누르면 펼쳐진다. 글쓰기 폼에서는 라디오처럼 하나만 선택된다.
- **카드 위 표시용** — `badge-category`: 정적 태그로, `tertiary-container` 배경 + `on-tertiary-container` 글자, `label-meta` 크기, 패딩 `3px 10px`. 클릭할 수 없다.

### 탭 (`tab-bar` / `tab-item`)

마이페이지([내가 쓴 글] / [내 정보])와 관리자 화면([의견 관리] / [분야 관리])에서 쓰는 2탭 고정 컴포넌트다.

- 탭 줄 전체에 `hairline` 밑줄, 탭 사이 간격 `lg`(24px)
- 각 탭: `title`과 같은 서체·크기(18px)를 쓰되 굵기는 400, 색 `on-surface-variant`, 패딩 `12px 4px`
- 활성 탭: 색 `primary`, 굵기 700(다른 탭과 굵기로도 구분), 밑줄에 `primary` 2px 인디케이터가 겹쳐진다

지금은 2탭 화면에만 쓴다. 탭이 3개 이상 필요해지면 이 스타일을 그대로 늘리지 말고 새로 판단한다 (하지 말 것 참고).

### 버튼

- `button-primary`(초록) — 핵심 행동(글 저장하기, 상태 저장 등)
- `button-secondary`(노랑) — 보조 행동
- `button-outline` — 취소처럼 비중 낮은 행동
- `button-cta`(알약형) — 히어로 안에서만
- `button-google` — 구글 인증 전용. 흰 배경 + 회색 테두리(`#DADCE0`) + 짙은 회색 글자(`#3C4043`), 왼쪽에 구글 로고. **우리 주색/보조색을 입히지 않는다.** 로고는 직접 그리지 않고 구글이 제공하는 공식 "G" 아이콘 에셋을 그대로 쓴다(구글 브랜드 가이드 위반 방지). 문구는 "Google로 계속하기"처럼 고정한다. `/login`, `/signup` 게이트 화면과 마이페이지 진입에 쓴다.
- `status-control` — 관리자 전용 3버튼 세그먼트, 위 상태 배지 절 참고

호버 시 배경을 어둡게 누르지 않고 각자의 `-container` 톤으로 밝게 전환해 반응을 준다 (단, `button-google`은 구글 가이드를 따르므로 이 규칙에서 제외).

### 입력 폼

"글 저장하기 + 사진 올리기" 글쓰기 폼 기준. 필드 순서: **제목 → 분야 → 내용 → 사진**, 필드 사이 세로 간격 `lg`(24px). 각 필드 위에는 `label-meta` 스타일 라벨을 둔다.

- **제목** — `input-field` (배경 `surface-container-low`, `hairline` 테두리, 포커스 시 `focus` 테두리). 필수.
- **분야** — 위 `category-chip`(단일 선택) 재사용. 새 컴포넌트를 만들지 않는다. 필수이며 기본 선택값은 없다("전체"도 고를 수 없다 — "전체"는 필터 전용이다).
- **내용** — `textarea-field`: `input-field`와 동일 규격 + 최소 높이 160px, 세로로만 크기 조절. 필수.
- **사진** — `file-upload`: `dashed` 점선 테두리, `rounded.md`, 패딩 `xl`(40px), 가운데 정렬 아이콘 + "사진 올리기" 텍스트(`body-md`). 선택 후에는 `file-upload-preview`(96×96px 썸네일, `rounded.sm`) + 파일명 + 삭제 버튼으로 바뀐다. 선택. 1장만 업로드한다(여러 장이 필요해지면 별도로 다시 정한다).
- **작성자 / 작성시간** — 입력 필드로 만들지 않는다. 로그인한 사용자 정보와 서버 시간으로 저장 시 자동으로 채워지고, 저장된 뒤 게시글 카드에서만 보여준다.
- **제출** — `button-primary`, 데스크톱에서는 폼 오른쪽 정렬, 모바일에서는 전체 폭

**필수값 검증** — 제목·분야·내용을 비운 채 제출하면 해당 필드가 `input-field-error`(빨간 테두리)로 바뀌고, 필드 아래 `error` 색으로 짧은 안내 문구(예: "제목을 입력해 주세요")를 `label-meta` 크기로 보여준다. `error`/`error-container` 색은 이 검증 상태 전용이며 다른 곳에는 쓰지 않는다.

## 하지 말 것

1. 주색(`#3E7452`)과 보조색(`#F5B93F`)을 나란히 큰 면적(배경+배경)으로 맞붙이지 않는다. 둘 다 채도가 있어 눈이 피로해진다 — 한쪽은 항상 포인트로만 쓴다.
2. 그림자를 즉석에서 만들지 않는다. `shadow.sm/md/lg` 3단계 밖의 값은 쓰지 않는다.
3. 모서리 반경을 `rounded` 토큰 밖의 임의 값(예: 10px, 18px)으로 쓰지 않는다.
4. 글자 굵기를 400/500/600/700 네 단계 밖(예: 300, 800, 900)으로 쓰지 않는다.
5. 손글씨 폰트(Gaegu)를 두 줄 이상 되는 본문 텍스트에 쓰지 않는다. 헤드라인·제목 전용이다.
6. 모바일 화면에서 3열·2열 그리드를 우겨넣지 않는다. 767px 이하는 반드시 1열이다.
7. 진한 검정(`#000000`) 테두리나 그림자를 쓰지 않는다. 반드시 `outline`/`shadow` 토큰의 옅은 톤을 쓴다.
8. `primary-gradient`를 히어로 배너 외의 곳(카드, 버튼, 배경 등)에 쓰지 않는다.
9. 히어로 안에서만 쓰는 알약형 CTA(`button-cta`, `full` radius)를 본문 안 일반 버튼에는 쓰지 않는다. 본문 버튼은 `DEFAULT`를 유지한다.
10. 상태 배지 3종(접수/처리중/완료)을 같은 색으로 통일하지 않는다. 색으로 바로 구분되는 것이 목적이다.
11. 구글 로그인 버튼(`button-google`)에 주색·보조색을 입히지 않는다. 구글 브랜드 가이드가 우선한다.
12. 작성자·작성시간을 사용자가 직접 입력하는 폼 필드로 만들지 않는다. 로그인 정보와 서버 시간으로 자동 기록한다.
13. 분야 칩이 아무리 늘어나도 화면 폭을 강제로 넓히거나 글자를 줄여 욱여넣지 않는다. 반드시 "더보기" 확장 방식을 쓴다.
14. 버튼·배지·칩·탭의 내부 패딩을 새로 만들 때 이 문서에 적힌 값(예: 버튼 `12px 24px`, 배지 `4px 12px`) 밖의 값을 즉석에서 만들지 않는다. 비슷한 컴포넌트의 기존 값을 그대로 따른다.
15. `error`/`error-container` 색을 필수값 검증 실패 표시 외의 용도(강조, 장식 등)로 쓰지 않는다.
16. 구글 로그인 버튼의 "G" 로고를 직접 그리거나 비슷하게 재현하지 않는다. 구글 공식 에셋만 쓴다.
