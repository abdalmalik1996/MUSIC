import {
  Form as veeForm,
  Field as veeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'

import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  alpha_num,
  min_value as miValue,
  max_value as maxValue,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules'
export default {
  install(app) {
    app.component('veeForm', veeForm)
    app.component('veeField', veeField)
    app.component('ErrorMessage', ErrorMessage)
    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('alpha_num', alpha_num)
    defineRule('min_value', miValue)
    defineRule('max_value', maxValue)
    defineRule('passwords_mismatch', confirmed)
    defineRule('excluded', excluded)
    defineRule('country_excluded', excluded)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field} is too long.`,
          alpha_spaces: `The field ${ctx.field} may only contain alphabetic charact and spaces`,
          email: `The field ${ctx.field} must be a valid email`,
          min_value: `The field ${ctx.field} is too low.`,
          max_value: `The field ${ctx.field} is too high.`,
          excluded: `You are not allowad to use this value for the field ${ctx.field}`,
          country_excluded: `Due to restrctions, we do not accept users from this loaction.`,
          passwords_mismatch: `The passwords don't match.`,
          tos: `You must accept The Terms of Service.`
        }
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`
        return message
      }
    })
  }
}
