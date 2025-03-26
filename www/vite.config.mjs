import { defineConfig } from 'vite'
import { resolve } from 'path'

import wasmPack from "vite-plugin-wasm";
// not needed, but important for supporting older browsers
import topLevelAwait from "vite-plugin-top-level-await";
import elmPlugin from "vite-plugin-elm";

export default defineConfig({
    base: "/elm-rust-tutorial/www/dist",
    build: {
        minify: false,
    },
    plugins: [
        wasmPack(["./elm-rust-tutorial"]),
        topLevelAwait(),
        elmPlugin()
    ]
})
