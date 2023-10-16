export type browserType = 'chromium' | 'firefox' | 'webkit' | 'electron';

export const setEmulator = getProfile(process.env.profile, 'emulate') || 'Desktop Chrome';
export const setBrowser = getProfile(process.env.profile, 'browser') || 'chromium';

function getProfile(profile?: string, key?: string) {
  profile = checkNull(profile);

  const options = profile!.split('|');
  const optionKey = `${key}:`;
  const option = options?.find(opt => opt.startsWith(optionKey));

  if (!option) return '';

  return option.replace(optionKey, '');
}

function checkNull(value: any) {
  if (value === null || value === undefined) {
    value = '';
  }
  return value;
}
