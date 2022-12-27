import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect, type Actions } from "@sveltejs/kit"

export const actions: Actions = {
	login: async ({ request, locals }) => {
        console.log('login server');
		const body = Object.fromEntries(await request.formData())

		const { data, error: err } = await locals.sb.auth.signInWithPassword({
			email: body.email as string,
			password: body.password as string,
		})

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					error: "Invalid credentials",
				})
			}
			return fail(500, {
				message: "Server error. Try again later.",
			})
		}

		throw redirect(303, "/")
	
    },
}