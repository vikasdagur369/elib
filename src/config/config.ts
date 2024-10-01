import {config as conf} from 'dotenv'
conf();

const _config = {
    port: process.env.PORT || 5513,
}


//Object.freeze kisi bhi element ko read only bna deta hai, so that koi use overWrite na kar paye.
export const config = Object.freeze(_config) 