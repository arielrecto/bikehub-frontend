import { superValidate } from 'sveltekit-superforms';
import { yup } from 'sveltekit-superforms/adapters';
import { object, ref, string } from 'yup';

const schema = object({
	name: string().required().max(60),
	email: string().email().required(),
	password: string().required(),
	password_confirmation: string().oneOf([ref('password'), undefined], 'passwords must match')
});

export const load = async () => {
	const form = await superValidate(yup(schema));

	return { form, schema };
};
