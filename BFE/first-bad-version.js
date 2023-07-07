

// This is a JavaScript coding problem from BFE.dev 

/*
 type IsBad = (version: number) => boolean
 */

/**
 * @param {IsBad} isBad 
 */
function firstBadVersion(isBad) {
	// firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  // the check function return the first bad version
  // if version v is bad, continue to check v-1
  // else return v+1
  const check = (v) => isBad(v)?  check(v-1) : v+1;
  return (version) => {
    // if none found, return -1, else use the check function defined above
    return isBad(version)? check(version) : -1
  }
}



