# Design QA

## Reference target

- Mobile content uses the full available device width without horizontal overflow.
- Ranking preserves a two-column `result / options` layout at every tested width.
- Ranking pyramid remains `1 / 2 / 3 / 4 / 5` cards per row and fits inside the result panel.
- Compact mobile spacing follows the supplied 1220 x 2712 reference captures.

## Verification

| Viewport | Page overflow | Ranking columns | Result overflow | Pyramid |
| --- | --- | --- | --- | --- |
| 1220 x 2712 | none (`1220 / 1220`) | 2 (`657.59px / 438.39px`) | none (`658 / 658`) | `1 / 2 / 3 / 4 / 5` |
| 375 x 812 | none (`375 / 375`) | 2 (`197.39px / 131.61px`) | none (`197 / 197`) | `1 / 2 / 3 / 4 / 5` |
| 320 x 700 | none (`320 / 320`) | 2 (`164.39px / 109.59px`) | none (`164 / 164`) | `1 / 2 / 3 / 4 / 5` |

Additional mobile checks at 375 x 812:

- Songs sorter: no overflowing descendants.
- Idols sorter: no overflowing descendants.
- Ranking result captions truncate within their cards.
- All 15 ranking cards remain inside the left result column.

## Automated checks

- `npm run lint`: passed
- `npm run build`: passed

final result: passed
