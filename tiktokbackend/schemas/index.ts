import user from './user'
import post from './post'
import postedBy from './postedBy'
import comment from './comment'

// Then we give our schema to the builder and provide the result to Sanity
// This means sanity is immediately going to read our exported schemas and it is going to populate them inside of the sanity studio
export const schemaTypes = [post, user, comment, postedBy]
