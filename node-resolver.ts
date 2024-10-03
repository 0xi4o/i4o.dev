import * as nodeCrypto from 'node:crypto'
import * as nodeFs from 'node:fs'
import * as nodePath from 'node:path'

export const crypto = nodeCrypto
export const fs = nodeFs
export const path = nodePath

export default {
	crypto: nodeCrypto,
	fs: nodeFs,
	path: nodePath,
}
