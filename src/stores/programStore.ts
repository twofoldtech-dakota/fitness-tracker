import { writable } from 'svelte/store';

export const programs = writable([]);

export const loadPrograms = async () => {
    const programsFromDb = await prisma.program.findMany();
    console.log('load programs');
    console.log(programsFromDb);
    
    //programs.set(programsFromDb);
    
};
loadPrograms();

export const createProgram = async(program: Program) => {
    console.log()
    const data = await prisma.program.create({
        data: { 
            title: program.title,
            endDate: program.endDate,
            startDate: program.startDate,
            completed: program.completed,
         },
      })
      console.log(data)
    // if(error) {
    //     return console.error(error);
    // }
};

export const deleteProgram = async(id: number) => {
    console.log('delete program');
    console.log(id);
};

export const updateProgram = async(program: Program) => {
    console.log('update program');
    console.log(program);
};