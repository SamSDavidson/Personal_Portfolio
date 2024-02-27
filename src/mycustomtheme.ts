
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #561092 
		"--color-primary-50": "230 219 239", // #e6dbef
		"--color-primary-100": "221 207 233", // #ddcfe9
		"--color-primary-200": "213 195 228", // #d5c3e4
		"--color-primary-300": "187 159 211", // #bb9fd3
		"--color-primary-400": "137 88 179", // #8958b3
		"--color-primary-500": "86 16 146", // #561092
		"--color-primary-600": "77 14 131", // #4d0e83
		"--color-primary-700": "65 12 110", // #410c6e
		"--color-primary-800": "52 10 88", // #340a58
		"--color-primary-900": "42 8 72", // #2a0848
		// secondary | #0e41b2 
		"--color-secondary-50": "219 227 243", // #dbe3f3
		"--color-secondary-100": "207 217 240", // #cfd9f0
		"--color-secondary-200": "195 208 236", // #c3d0ec
		"--color-secondary-300": "159 179 224", // #9fb3e0
		"--color-secondary-400": "86 122 201", // #567ac9
		"--color-secondary-500": "14 65 178", // #0e41b2
		"--color-secondary-600": "13 59 160", // #0d3ba0
		"--color-secondary-700": "11 49 134", // #0b3186
		"--color-secondary-800": "8 39 107", // #08276b
		"--color-secondary-900": "7 32 87", // #072057
		// tertiary | #6fae68 
		"--color-tertiary-50": "233 243 232", // #e9f3e8
		"--color-tertiary-100": "226 239 225", // #e2efe1
		"--color-tertiary-200": "219 235 217", // #dbebd9
		"--color-tertiary-300": "197 223 195", // #c5dfc3
		"--color-tertiary-400": "154 198 149", // #9ac695
		"--color-tertiary-500": "111 174 104", // #6fae68
		"--color-tertiary-600": "100 157 94", // #649d5e
		"--color-tertiary-700": "83 131 78", // #53834e
		"--color-tertiary-800": "67 104 62", // #43683e
		"--color-tertiary-900": "54 85 51", // #365533
		// success | #ebb666 
		"--color-success-50": "252 244 232", // #fcf4e8
		"--color-success-100": "251 240 224", // #fbf0e0
		"--color-success-200": "250 237 217", // #faedd9
		"--color-success-300": "247 226 194", // #f7e2c2
		"--color-success-400": "241 204 148", // #f1cc94
		"--color-success-500": "235 182 102", // #ebb666
		"--color-success-600": "212 164 92", // #d4a45c
		"--color-success-700": "176 137 77", // #b0894d
		"--color-success-800": "141 109 61", // #8d6d3d
		"--color-success-900": "115 89 50", // #735932
		// warning | #4786fb 
		"--color-warning-50": "227 237 254", // #e3edfe
		"--color-warning-100": "218 231 254", // #dae7fe
		"--color-warning-200": "209 225 254", // #d1e1fe
		"--color-warning-300": "181 207 253", // #b5cffd
		"--color-warning-400": "126 170 252", // #7eaafc
		"--color-warning-500": "71 134 251", // #4786fb
		"--color-warning-600": "64 121 226", // #4079e2
		"--color-warning-700": "53 101 188", // #3565bc
		"--color-warning-800": "43 80 151", // #2b5097
		"--color-warning-900": "35 66 123", // #23427b
		// error | #c49b08 
		"--color-error-50": "246 240 218", // #f6f0da
		"--color-error-100": "243 235 206", // #f3ebce
		"--color-error-200": "240 230 193", // #f0e6c1
		"--color-error-300": "231 215 156", // #e7d79c
		"--color-error-400": "214 185 82", // #d6b952
		"--color-error-500": "196 155 8", // #c49b08
		"--color-error-600": "176 140 7", // #b08c07
		"--color-error-700": "147 116 6", // #937406
		"--color-error-800": "118 93 5", // #765d05
		"--color-error-900": "96 76 4", // #604c04
		// surface | #089add 
		"--color-surface-50": "218 240 250", // #daf0fa
		"--color-surface-100": "206 235 248", // #ceebf8
		"--color-surface-200": "193 230 247", // #c1e6f7
		"--color-surface-300": "156 215 241", // #9cd7f1
		"--color-surface-400": "82 184 231", // #52b8e7
		"--color-surface-500": "8 154 221", // #089add
		"--color-surface-600": "7 139 199", // #078bc7
		"--color-surface-700": "6 116 166", // #0674a6
		"--color-surface-800": "5 92 133", // #055c85
		"--color-surface-900": "4 75 108", // #044b6c
		
	}
}