import Input from './Input'

export default {
    title: 'Example/Input',
    component: Input,
    argTypes: {
        variant: {
            options: ['default', 'error'],
            control: { type: 'radio' }
        },
        disabled: {
            control: { type: 'boolean' }
        },
        value: {
            control: { type: 'text' }
        },
        labelText: {
            control: { type: 'text' }
        },
        helperText: {
            control: { type: 'text' }
        },
        startIcon: {
            options: ['search', 'lock', 'visibility', 'cart', 'delete'],
            control: { type: 'radio' }
        },
        endIcon: {
            options: ['search', 'lock', 'visibility', 'cart', 'delete'],
            control: { type: 'radio' }
        },
        size: {
            options: ['sm', 'md'],
            control: { type: 'radio' }
        },
        fullWidth: {
            control: { type: 'boolean' }
        },
        multiLine: {
            control: { type: 'boolean' }
        },
        rows: {
            control: { type: 'number' }
        },
        color: {
            control: { type: 'color' },
            defaultValue: 'inherit'
        }


    }

}

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: 'default'
}
export const Error = Template.bind({});
Error.args = {
    variant: 'error'
}

export const Disabled = Template.bind({});
Disabled.args={
    disabled:true
}
export const FullWidth = Template.bind({});
FullWidth.args={
    fullWidth:true
}
export const LabelText = Template.bind({});
LabelText.args={
    labelText:'Label Text'
}

export const HelperText = Template.bind({});
HelperText.args={
    helperText:'Helper Text'
}