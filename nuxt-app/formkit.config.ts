import { en } from '@formkit/i18n'
import { DefaultConfigOptions } from '@formkit/vue'
import { createAutoAnimatePlugin } from '@formkit/addons'
import '@formkit/themes/genesis'

const config: DefaultConfigOptions = {
    locales: { en },
    locale: 'en',
    plugins: [
        createAutoAnimatePlugin()
    ]
}

export default config