# 1-topshiriq

Web3 DApp for wallet connection, contract read/write, and Hardhat local deployment.

Muallif: `azizbekce`

Loyiha egasi wallet manzili:

```text
0xA89c45b89b0558e866c5B983E27a61Df6b0FA968
```

Eslatma: bu wallet address, kontrakt address emas. `VITE_CONTRACT_ADDRESS` ga deploy qilingan kontrakt manzilini yozish kerak.

## Asosiy fayllar

- `contracts/TaskOneStorage.sol` - oddiy storage kontrakti
- `scripts/deploy-task-one.js` - Hardhat deploy script
- `src/main.jsx` - frontend logikasi

## Ishga tushirish

1. `.env.example` faylini `.env` qilib ko'chiring.
2. `VITE_CONTRACT_ADDRESS` ga deploy qilingan kontrakt addressini yozing.
3. `VITE_WALLETCONNECT_PROJECT_ID` ni kiriting.
4. Paketlarni o'rnating va frontendni ishga tushiring.

```bash
npm install
npm run dev
```

## Lokal deploy

```bash
npx hardhat node
npx hardhat run scripts/deploy-task-one.js --network localhost
```

Deploydan chiqqan kontrakt addressini `.env` ichidagi `VITE_CONTRACT_ADDRESS` qiymatiga qo'ying.
