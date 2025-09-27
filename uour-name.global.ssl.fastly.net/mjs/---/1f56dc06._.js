const rawrxd = {
    en(str) {
        if (!str) return str;
        let result = "";
        let len = str.length;
        for (let i = 0; i < len; i++) {
            //take out https
            str.replace("https://", "");
            const char = str[i];
            result += i % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char;
        }
        //put back https but encode it diff

        var endresult = result.replace("hvtrs8/-", "https%3A%2F%2F");

        return encodeURIComponent(endresult);
    },
    de(str) {
        if (!str) return str;
        str = decodeURIComponent(str);
        let result = "";
        let len = str.length;
        for (let i = 0; i < len; i++) {
            const char = str[i];
            result += i % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char;
        }

        let endresult = result.replace(`hvtrs'3C%0F'2D`, "https://");
        return endresult;
    },
};

self._temu$config = {
    prefix: "/xjs/js/",
    encodeUrl: rawrxd.en,
    decodeUrl: rawrxd.de,
    handler: "/mjs/---/_01f48b92._.js",
    client: "/mjs/---/_e69f0d32._.js",
    bundle: "/mjs/---/c5600bb8._.js",
    config: "/mjs/---/1f56dc06._.js",
    sw: "/mjs/---/5718d31d.js",
    inject: [{
            //dumb hack to allow google to work with encoding
            //holy formatting
            host: /^google\.com$/,
            injectTo: "body",
            html: `
            <script>
                console.log("[Ghost.Inject] Injected fix script into google! >:3");
                //get the inputs
                const form = document.querySelector('form[action="https://beta.meow.useghost.pro/xjs/js/https%253A%252F%252Fwuw%2Cgmoelg.aoo%2Fqecrah"][method="GET"]');
                const searchInput = form.querySelector('textarea[name="q"]');

                const originalSubmit = form.submit;

                //fuck with the search queries
                form.addEventListener('submit', function(event) {
                    event.preventDefault(); 
                    const newurl = "https://google.com/search?q=" + encodeURIComponent(searchInput.value);
                    console.log(newurl);
                    const encodedURL = _temu$config.encodeUrl(newurl);
                    window.location.href = "/xjs/js/" +  encodedURL
                });

        form.submit = function() {
        };

        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); 
                                    event.preventDefault(); 
                    const newurl = "https://google.com/search?q=" + encodeURIComponent(searchInput.value);
                    const encodedURL = _temu$config.encodeUrl(newurl);
                    window.location.href = "/xjs/js/" +  encodedURL
            }
        });

            </script>
            `,
        },
        {
            host: /^duckduckgo\.com$/,
            injectTo: "body",
            html: `
        <script>
        console.log("[Ghost.Inject] Injected fix script into duckduckgo! >:3");
          const form = document.querySelector('form[action="https://beta.meow.useghost.pro/xjs/js/https%253A%252F%252Fdwcidwcigm.aoo%2F"][method="GET"]')
          const searchInput = form.querySelector('input[name="q"]');

          const originalSubmit = form.submit;

          //fuck with the search queries
          form.addEventListener('submit', function(event) {
              event.preventDefault(); 
              const newurl = "https://duckduckgo.com/search?q=" + encodeURIComponent(searchInput.value);
              console.log(newurl);
              const encodedURL = _temu$config.encodeUrl(newurl);
              window.location.href = "/xjs/js/" +  encodedURL
              });

        form.submit = function() {
        };

        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const newurl = "https://duckduckgo.com/search?q=" + encodeURIComponent(searchInput.value);
            const encodedURL = _temu$config.encodeUrl(newurl);
           window.location.href = "/xjs/js/" +  encodedURL
        });

        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); 
                const newurl = "https://duckduckgo.com/search?q=" + encodeURIComponent(searchInput.value);
                const encodedURL = _temu$config.encodeUrl(newurl);
                window.location.href = "/xjs/js/" +  encodedURL
            }
        });

        </script>
      `,
        },
        {
            host: /^(.*\.)?crazygames\.com$/,
            injectTo: "body",
            html: `
        <script>
        console.log("[Ghost.Inject] Injected fix script into crazygames! >:3");
        //THIS SCRIPT WILL BE INJECTED VIA ULTRAVIOLET 
        setInterval(() => {
            console.log(location.href)
            const g_frame = document.querySelector("#game-iframe");
            if (!g_frame?.contentWindow?.document) return;

            const gDocument = g_frame.contentWindow.document;
            const conne2 = gDocument.querySelector(".css-18vh0ai");
            if (!conne2) return;

            const meow = conne2.querySelector(".MuiButtonBase-root.css-b48h4t");
            const text = gDocument.querySelector(".css-1uzrx98");

            if (meow) meow.remove();
            if (text) text.innerText = "[Ghost] Hit the Continue offline button to continue!";
            }, 1500);
        </script>
        `,
        },
    ],
};