import { en } from '@formkit/i18n'
import { DefaultConfigOptions } from '@formkit/vue'
import { createAutoAnimatePlugin } from '@formkit/addons'
import '@formkit/themes/genesis'

// add an asterisk to required fields
const isCheckboxAndRadioMultiple = (node) => (node.props.type === 'checkbox' || node.props.type === 'radio') && node.props.options
function addAsteriskPlugin(node) {
    node.on('created', () => {
        const schemaFn = node.props.definition.schema;
        node.props.definition.schema = (sectionsSchema = {}) => {
            const isRequired = node.props.parsedRules.some(rule => rule.name === 'required');

            if (isRequired) {
                if (isCheckboxAndRadioMultiple(node)) {
                    sectionsSchema.legend = {
                        children: ['$label', ' *']
                    }
                } else {
                    sectionsSchema.label = {
                        children: ['$label', ' *']
                    }
                }
            }
            return schemaFn(sectionsSchema);
        }
    })
}

const config: DefaultConfigOptions = {
    locales: { en },
    locale: 'en',
    plugins: [
        createAutoAnimatePlugin(),
        addAsteriskPlugin
    ]
}

export default config