import { supabase } from "../services/supabaseClient"

export const getUser = async (id) => {

    const { data, error } = await supabase
        .from('users')
        .select()
        .eq('id_user', id)
    if (error) throw error
    return data

}
export const getKnowlegedByUser = async (id) => {

    const { data, error } = await supabase
        .from('knowledge_by_user')
        .select(`knowledge(id_knowledge,knowledge)`)
        .eq('id_user', id)
    if (error) throw error
    return data
}
export const getProjects = async (id) => {

    const { data, error } = await supabase
        .from('projects')
        .select(`
            id_projects,
            projects,
            description,
            link,
            knowledge_by_projects(
                id_knowledge_used,
                knowledge(id_knowledge,knowledge)
            )`)
        .eq('id_user', id)
    if (error) throw error
    return data
}
export const getExperience = async (id) => {

    const { data, error } = await supabase
        .from('experiences')
        .select()
        .eq('id_user', id)
    if (error) throw error
    return data
}