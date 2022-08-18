//const config = require("./config/config");
//import { config } from './config/config'
//import {config } from './config/config.js'
window.onload = function() {
    //<editor-fold desc="Changeable Configuration Block">
    
    // the following lines will be replaced by docker/configurator, when it runs in a docker-container
    window.ui = SwaggerUIBundle({
        //url: "https://petstore.swagger.io/v2/swagger.json",
        //urls: config,
        urls: [
            {
                //"url": "http://tech-swagger-test.s3-website.ap-northeast-2.amazonaws.com/api-docs/swagger-spec-nestjs-boilerplate.json",
                "url": "http://tech-swagger-test.s3-website.ap-northeast-2.amazonaws.com/swagger/swagger-spec.json",
                "name": "nestjs-boilerplate-app-api"
            },
            {
                "url": "https://petstore.swagger.io/v2/swagger.json",
                "name": "Swagger-official-example-api"
            },
        ],
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset
        ],
        plugins: [
            SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout"
    });

    //</editor-fold>
};
