export function updateprofileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateprofileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateprofileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}
