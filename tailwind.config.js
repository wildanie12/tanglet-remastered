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
                primary: {
                    100: "#1F97BD",
                    300: "#236188",
                    500: "#1C425A",
                    700: "#0D2B3F",
                    900: "#001726",
                    DEFAULT: "#1C425A",
                },
                secondary: "#FFAC00",
                accent: "#BF0404",
                neutral: "#3D4451",
                info: "#6BB3FF",
                success: {
                    100: "#00947B",
                    300: "#08C0A1",
                    500: "#00947B",
                    700: "#0D7160",
                    900: "#074C41",
                    DEFAULT: "#00947B",
                },
                warning: {
                    100: "#FFC93F",
                    300: "#F4B717",
                    500: "#FF9900",
                    700: "#ED8F03",
                    900: "#C87800",
                    DEFAULT: "#FF9900",
                },
                error: "#FF2424",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                raleway: ["Raleway", "sans-serif"],
            },
        },
    },
    plugins: [],
};
