module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1C425A",
                secondary: "#FFAC00",
                accent: "#BF0404",
                neutral: "#3D4451",
                info: "#6BB3FF",
                success: "#00947B",
                warning: "#FF9900",
                error: "#FF2424",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
