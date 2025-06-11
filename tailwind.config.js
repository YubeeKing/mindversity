/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroimgone': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1735421427/z5fkks4voa5nr7jz7jgr.jpg')",
        'heroimgtwo': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1735421428/vsabiecrt4fvptwbrgk4.jpg')",
        'heroimgthree': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1735421428/j1eld5jbv2vdbrmlsifm.jpg')",
        'elbowone': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1749619436/photo_2025-06-11_06-16-49_q3brki.jpg')",
        'elbowtwo': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1749619438/photo_2025-06-10_17-08-21_cj8p4r.jpg')",
        'elbowthree': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1749619436/photo_2025-06-11_06-16-50_icdzbb.jpg')"
      },
      colors: {
        primary: "#d21334",
        inpcolor: "#0000004d"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}

