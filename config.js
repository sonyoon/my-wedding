/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "손웅호",
    nameEn: "Groom",
    father: "정익",
    mother: "",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "윤소연",
    nameEn: "Bride",
    father: "하식",
    mother: "미선",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-06-13",
    time: "15:00",
    venue: "김해더파티웨딩",
    hall: "벨리스홀 4층",
    address: "김해대로 2342 아이스퀘어몰 4층",
    tel: "055-335-1000",
    mapLinks: {
      kakao: "https://kko.to/lx-bC3-Ier",
      naver: "https://naver.me/xHgIyebO"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "손웅호", bank: "농협", number: "352-6393-8097-53" },
      { role: "아버지", name: "손정익", bank: "농협", number: "817012-56-123609" }
    ],
    bride: [
      { role: "신부", name: "윤소연", bank: "카카오뱅크", number: "3333-12-6915300" },
      { role: "아버지", name: "최하식", bank: "부산은행", number: "108-12-013157-4" },
      { role: "어머니", name: "장미선", bank: "새마을금고", number: "9003-2440-3145-2" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "손웅호 ♥ 윤소연 결혼합니다",
    description: "2026년 6월 13일, 소중한 분들을 초대합니다."
  }
};
