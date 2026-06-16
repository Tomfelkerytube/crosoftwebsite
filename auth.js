const { createClient } = supabase

const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function signUp(email, password) {
  const { data, error } = await _supabase.auth.signUp({ email, password })
  return { data, error }
}

async function signIn(email, password) {
  const { data, error } = await _supabase.auth.signInWithPassword({ email, password })
  return { data, error }
}

async function signOut() {
  const { error } = await _supabase.auth.signOut()
  return { error }
}

async function getSession() {
  const { data, error } = await _supabase.auth.getSession()
  return { session: data.session, error }
}

async function onAuthChange(callback) {
  _supabase.auth.onAuthStateChange((event, session) => {
    callback(event, session)
  })
}

async function signInWithOAuth(provider) {
  const { data, error } = await _supabase.auth.signInWithOAuth({ provider })
  return { data, error }
}
