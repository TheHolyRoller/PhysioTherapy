// // components/LanguageSwitcher.jsx
// 'use client'; // Add this to indicate that this is a client component

// import { useTranslation } from 'next-i18next';
// import { useRouter } from 'next/navigation'; // Change this import

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();
//   const router = useRouter(); // Use the router from next/navigation

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng); // Change the language using i18next
//     router.push(router.asPath); // Update the route to reflect the new language
//   };

//   return (
//     <div>
//       <button onClick={() => changeLanguage('en')}>English</button>
//       <button onClick={() => changeLanguage('it')}>Italiano</button>
//     </div>
//   );
// };

// export default LanguageSwitcher;
