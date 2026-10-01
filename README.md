# i Lab Homepage

Interaction Laboratory (인터랙션 연구실), Kumoh National Institute of Technology.
Live site: https://ilab-kit.github.io/ilab/

Built with [Astro](https://astro.build). Pushing to `main` deploys automatically through GitHub Actions.

## 내용 수정하기 (코드 몰라도 됩니다)

모든 내용은 `src/data/` 폴더의 YAML 파일에 있습니다. 파일을 고치고 push하면 1~2분 뒤 사이트에 반영됩니다.

| 파일 | 내용 |
|---|---|
| `site.yaml` | 연구실 이름, 소개, 모집 문구, 연락처 |
| `members.yaml` | 구성원 (사진은 `public/images/members/`에 넣고 `photo:`에 경로 입력) |
| `news.yaml` | 연구실 소식 (맨 위에 추가하면 최신 소식) |
| `publications.yaml` | 논문 (`type`, `title`, `authors`, `venue`, `year`) |
| `patents.yaml` | 특허 |
| `projects.yaml` | 연구과제 (`status: ongoing` / `completed`) |
| `research.yaml` | 연구 분야와 대표 연구 |
| `equipment.yaml` | 보유 장비 |
| `lectures.yaml` | 강의 |

예: 소식 추가

```yaml
- date: 2026-10
  category: 수상
  title: 한국햅틱스학술대회 우수논문상 수상
```

GitHub 웹사이트에서 파일을 열고 연필(✏️) 아이콘으로 바로 수정해도 됩니다.

## 로컬에서 실행하기

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:4321/ilab/ 을 엽니다.
