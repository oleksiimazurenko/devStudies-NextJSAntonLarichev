import '@/styles/globals.scss'

import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import styles from './layout.module.scss'

import { ReduxProvider } from '@/store/provider'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { Sidebar } from '../components/Sidebar/Sidebar'

const notoSans = Noto_Sans({
	subsets: ['latin', 'cyrillic'],
	weight: ['100', '300', '500'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Unknown',
	description: 'Unknown app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${notoSans.className} ${styles.wrapper}`}>
				<ReduxProvider>
					<Header className={styles.header} />
					<Sidebar className={styles.sidebar} />
					<main className={styles.main}>{children}</main>
					<Footer className={styles.footer} />
				</ReduxProvider>
			</body>
		</html>
	)
}