/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: { 
      fontFamily:{
       hat: ["Red Hat Display", " sans-serif"] 
      }, fontSize:{
        main:['40px','44px'],
        des:['16px','26px'],
        dsc:['18px','26px'],
        quote:['32px','36px'],
        "main-md":['48px','48px'],
        "main-2-md":['40px','44px'],
        "main-lg":['64px','64px'],
        "des-lg":['18px','26px'],
      },colors:{
        purple:"#87879D"
      }
    },
  },
  plugins: [],
};
