import { goto } from '$app/navigation';
import { supabaseClient } from '$lib/supabase';
import { writable } from 'svelte/store';

export const programs = writable<ArrayLike<unknown> | []>([]);

export const loadPrograms = async () => {
    
    const user_id = (await supabaseClient.auth.getUser()).data.user?.id;
    const {data, error} = await supabaseClient
    .from('Programs')
    .select('*')
    .match({ user_id })

    if(error) {
        return console.error(error);
    }
    programs.set(data);    
};
loadPrograms();

export const createProgram = async (name: string, user_id: string | unknown) => {
    console.log(user_id);
    const { data, error } = await supabaseClient
    .from('Programs')
    .upsert({ name, user_id })
    .select('*')

    if(error) {
        return console.error(error);
    }
    programs.update(cur => [...cur, data[0]]);
    goto('/training');
};

export const deleteProgram = async(id: number | unknown) => {
    const {error} = await supabaseClient
    .from('Programs')
    .delete()
    .match({id});
    
    if(error) {
        return console.error(error);
    }

	programs.update((programs) => programs.filter((cur) => cur.id !== id));
    goto('/training');

};

export const updateProgram = async(id: number | unknown, name: string, completed: boolean) => {
    const { data, error } = await supabaseClient
    .from('Programs')
    .update({
        name,
        completed,
    }).match({id});

    if(error) {
        return console.error('here',error);
    }
    
	programs.update((programs) => {
		let index = -1;
		for (let i = 0; i < programs.length; i++) {
			if (programs[i].id === id) {
				index = i;
				break;
			}
		}
		if (index !== -1) {
			programs[index].name = name;
			programs[index].completed = completed;
		}
		return programs;
	});

    goto('/training');
};
