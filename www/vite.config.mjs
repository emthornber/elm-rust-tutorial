import { defineConfig } from 'vite'
import { resolve } from 'path'

import elmPlugin from "vite-plugin-elm";
// not needed, but important for supporting older browsers
import topLevelAwait from "vite-plugin-top-level-await";
import wasmPack from "vite-plugin-wasm";

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
