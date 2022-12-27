import { supabaseClient } from "$lib/supabase";

export const load = ({ params }) => {
    const fetchProgram = async (id) => {
        const { data, error } = await supabaseClient.from('Programs').select('*').match({id});
        if(error) {
            return console.error(error);
        }
        return data[0];
    }
    return {
        program: fetchProgram(params.id)
    }

}