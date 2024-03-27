import { superValidate } from 'sveltekit-superforms';
import { yup } from 'sveltekit-superforms/adapters'
import { object, string } from 'yup';

const schema = object({
    username: string().email().required(),
    password: string().required(),
});

export const load = async () => {
    const form = await superValidate(yup(schema))

    return { form }
}