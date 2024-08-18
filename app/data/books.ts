export type Book = {
	title: string
	author: string
	cover?: string
}

export const currentlyReading: Book[] = [
	{
		title: 'How to Take Smart Notes',
		author: 'Sönke Ahrens',
		cover: '/images/book-covers/how-to-take-smart-notes.jpg',
	},
	{
		title: "Let's Go Further",
		author: 'Alex Edwards',
		cover: '/images/book-covers/lets-go-further.png',
	},
]

export const readThisYear: Book[] = [
	{
		title: 'Jujutsu Kaisen Vol 1',
		author: 'Gege Akutami',
		cover: '/images/book-covers/jujutsu-kaisen.jpg',
	},
	{
		title: 'Jujutsu Kaisen Vol 2',
		author: 'Gege Akutami',
		cover: '/images/book-covers/jujutsu-kaisen-2.jpg',
	},
	{
		title: 'Jujutsu Kaisen Vol 3',
		author: 'Gege Akutami',
		cover: '/images/book-covers/jujutsu-kaisen-3.jpg',
	},
	{
		title: 'Jujutsu Kaisen Vol 4',
		author: 'Gege Akutami',
		cover: '/images/book-covers/jujutsu-kaisen-4.jpg',
	},
	{
		title: 'Jujutsu Kaisen Vol 5',
		author: 'Gege Akutami',
		cover: '/images/book-covers/jujutsu-kaisen-5.jpg',
	},
	{
		title: 'Circe',
		author: 'Madeline Miller',
		cover: '/images/book-covers/circe.jpg',
	},
	{
		title: "Let's Go",
		author: 'Alex Edwards',
		cover: '/images/book-covers/lets-go.jpg',
	},
	{
		title: 'More Days at the Morisaki Bookshop',
		author: 'Satoshi Yagisawa',
		cover: '/images/book-covers/more-days-at-the-morisaki-bookshop.jpg',
	},
	{
		title: 'Days at the Morisaki Bookshop',
		author: 'Satoshi Yagisawa',
		cover: '/images/book-covers/days-at-the-morisaki-bookshop.jpg',
	},
	{
		title: 'Small Things Like These',
		author: 'Claire Keegan',
		cover: '/images/book-covers/small-things-like-these.jpg',
	},
	{
		title: 'A Psalm for the Wild-Built',
		author: 'Becky Chambers',
		cover: '/images/book-covers/psalm-for-the-wild-built.jpg',
	},
	{
		title: 'A Prayer for the Crown-Shy',
		author: 'Becky Chambers',
		cover: '/images/book-covers/prayer-for-the-crown-shy.jpg',
	},
]

export const onMyRadar: Book[] = [
	{
		title: 'How to Solve It',
		author: 'George Pólya',
		cover: '/images/book-covers/how-to-solve-it.jpg',
	},
	{
		title: 'Foundation',
		author: 'Isaac Asimov',
		cover: '/images/book-covers/foundation.jpg',
	},
	{
		title: 'Learn Concurrent Programming with Go',
		author: 'James Cutajar',
		cover: '/images/book-covers/concurrent-go.jpg',
	},
	{
		title: 'Plato: Five Dialogues',
		author: 'Plato, G. M. A. Grube (Translator), John M. Cooper (Editor)',
		cover: '/images/book-covers/plato-five-dialogues.jpg',
	},
	{
		title: 'Structure and Interpretation of Computer Programs',
		author: 'Harold Abelson and Gerald Jay Sussman',
		cover: '/images/book-covers/sicp.jpg',
	},
	{
		title: 'Now Go: On Grief and Studio Ghibli',
		author: 'Karl Thomas Smith',
		cover: '/images/book-covers/now-go.jpg',
	},
	{
		title: 'Writing for Software Developers',
		author: 'Philip Kiely',
		cover: '/images/book-covers/wfsd.png',
	},
	{
		title: 'To The Lighthouse',
		author: 'Virginia Woolf',
		cover: '/images/book-covers/to-the-lighthouse.jpg',
	},
	{
		title: 'The Nicomachean Ethics',
		author: 'Aristotle',
		cover: '/images/book-covers/nicomachean-ethics.jpg',
	},
	{
		title: 'Don Quixote',
		author: 'Miguel de Cervantes',
		cover: '/images/book-covers/don-quixote.jpg',
	},
	{
		title: 'Anna Karenina',
		author: 'Leo Tolstoy',
		cover: '/images/book-covers/anna-karenina.jpg',
	},
	{
		title: 'Meditations',
		author: 'Marcus Aurelius (Translated by Gregory Hays)',
		cover: '/images/book-covers/meditations.jpeg',
	},
	{
		title: "Poor Charlie's Almanack",
		author: 'Charles T. Munger',
		cover: '/images/book-covers/poor-charlies-almanack.jpg',
	},
	{
		title: 'How to Think like a Roman Emperor',
		author: 'Donald Robertson',
		cover: '/images/book-covers/roman-emperor.jpg',
	},
	{
		title: 'Bird by Bird',
		author: 'Anne Lamott',
		cover: '/images/book-covers/bird-by-bird.jpg',
	},
	{
		title: 'The SaaS Playbook',
		author: 'Rob Walling',
		cover: '/images/book-covers/saas-playbook.jpg',
	},
	{
		title: 'Designing Data-Intensive Applications',
		author: 'Martin Kleppman',
		cover: '/images/book-covers/ddia.jpeg',
	},
	{
		title: 'Engineering Management for the Rest of Us',
		author: 'Sarah Drasner',
		cover: '/images/book-covers/emftrou.jpg',
	},
	{
		title: "The Software Engineer's Guidebook",
		author: 'Gergely Orosz',
		cover: '/images/book-covers/tsegb.jpg',
	},
	{
		title: "A supposedly fun thing I'll never do",
		author: 'David Foster Wallace',
		cover: '/images/book-covers/supposedly-fun.jpg',
	},
	{
		title: 'Zero to Production in Rust',
		author: 'Luca Palmieri',
		cover: '/images/book-covers/z2p.png',
	},
	{
		title: 'Start Small, Stay Small',
		author: 'Rob Walling',
		cover: '/images/book-covers/ssss.jpg',
	},
	{
		title: 'The Boron Letters',
		author: 'Gary Halbert',
		cover: '/images/book-covers/boron-letters.jpg',
	},
	{
		title: 'The Pragmatic Programmer',
		author: 'David Thomas & Andrew Hunt',
		cover: '/images/book-covers/pragmatic-programmer.jpg',
	},
	{
		title: 'The Elements of Style',
		author: 'William Strunk Jr & E. B. White',
		cover: '/images/book-covers/elements-of-style.jpg',
	},
	{
		title: 'Sense of Style',
		author: 'Steven Pinker',
		cover: '/images/book-covers/sense-of-style.jpg',
	},
	{
		title: 'Writing to Learn',
		author: 'William Zinsser',
		cover: '/images/book-covers/writing-to-learn.jpg',
	},
	{
		title: 'On Writing Well',
		author: 'William Zinsser',
		cover: '/images/book-covers/on-writing-well.jpg',
	},
	{
		title: 'Sapiens',
		author: 'Yuval Noah Harari',
		cover: '/images/book-covers/sapiens.jpg',
	},
	{
		title: 'The Art and Business of Online Writing',
		author: 'Nicolas Cole',
		cover: '/images/book-covers/online-writing.jpg',
	},
]

export const toRead: Book[] = [
	{
		title: 'The Iliad',
		author: 'Homer',
		cover: '/images/book-covers/iliad.jpeg',
	},
	{
		title: 'The Odyssey',
		author: 'Homer',
		cover: '/images/book-covers/odyssey.jpg',
	},
	{
		title: "Tess of the d'Urbervilles",
		author: 'Thomas Hardy',
		cover: '/images/book-covers/tess.jpg',
	},
	{
		title: 'Time Machine',
		author: 'H. G. Wells',
		cover: '/images/book-covers/time-machine.jpg',
	},
	{
		title: 'Flatland',
		author: 'Edwin A. Abbott',
		cover: '/images/book-covers/flatland.jpg',
	},
	{
		title: 'The Brothers Karamazov',
		author: 'Fyodor Dostoyevsky',
		cover: '/images/book-covers/brothers-karamazov.jpg',
	},
	{
		title: 'The Count of Monte Cristo',
		author: 'Alexandre Dumas',
		cover: '/images/book-covers/monte-cristo.jpg',
	},
	{
		title: 'Leonardo Da Vinci',
		author: 'Walter Isaacson',
		cover: '/images/book-covers/da-vinci.jpg',
	},
	{
		title: 'Walden',
		author: 'Henry David Thoreau',
		cover: '/images/book-covers/walden.jpg',
	},
	{
		title: 'The Great Mental Models',
		author: 'Farnam Street',
		cover: '/images/book-covers/great-mental-models.jpg',
	},
	{
		title: 'Moby Dick',
		author: 'Herman Melville',
		cover: '/images/book-covers/moby-dick.jpg',
	},
	{
		title: 'Indistractable',
		author: 'Nir Eyal',
		cover: '/images/book-covers/indistractable.jpg',
	},
	{
		title: 'Keep Going',
		author: 'Austin Kleon',
		cover: '/images/book-covers/keep-going.jpg',
	},
]

export const read2023: Book[] = [
	{
		title: 'The Bullet Journal Method',
		author: 'Ryder Carroll',
		cover: '/images/book-covers/bullet-journal-method.jpg',
	},
	{
		title: 'Persepolis Rising',
		author: 'James S. A. Corey',
		cover: '/images/book-covers/persepolis-rising.jpg',
	},
	{
		title: "Abaddon's Gate",
		author: 'James S. A. Corey',
		cover: '/images/book-covers/abaddons-gate.jpg',
	},
	{
		title: 'Cibola Burn',
		author: 'James S. A. Corey',
		cover: '/images/book-covers/cibola-burn.jpg',
	},
	{
		title: 'Nemesis Games',
		author: 'James S. A. Corey',
		cover: '/images/book-covers/nemesis-games.jpg',
	},
	{
		title: "Babylon's Ashes",
		author: 'James S. A. Corey',
		cover: '/images/book-covers/babylons-ashes.jpg',
	},
	{
		title: 'Show Your Work',
		author: 'Austin Kleon',
		cover: '/images/book-covers/show-your-work.jpg',
	},
	{
		title: 'Building a Second Brain',
		author: 'Tiago Forte',
		cover: '/images/book-covers/basb.jpg',
	},
	{
		title: 'Lives of the Stoics',
		author: 'Ryan Holiday',
		cover: '/images/book-covers/lives-of-the-stoics.jpg',
	},
	{
		title: 'Demon Slayer: Kimetsu no Yaiba',
		author: 'Koyoharu Gotouge',
		cover: '/images/book-covers/demon-slayer.webp',
	},
	{
		title: 'Attack on Titans: Shingeki no Kyojin',
		author: 'Hajime Isayama',
		cover: '/images/book-covers/aot.jpeg',
	},
	{
		title: 'The Sandman: Preludes & Nocturnes',
		author: 'Neil Gaiman',
		cover: '/images/book-covers/preludes-and-nocturnes.jpeg',
	},
	{
		title: "The Sandman: The Doll's House",
		author: 'Neil Gaiman',
		cover: '/images/book-covers/dolls-house.jpg',
	},
	{
		title: 'The Sandman: Dream Country',
		author: 'Neil Gaiman',
		cover: '/images/book-covers/dream-country.jpg',
	},
]

export const allTimeFavorites: Book[] = [
	{
		title: 'Dune Trilogy',
		author: 'Frank Herbert',
		cover: '/images/book-covers/dune.jpg',
	},
	{
		title: 'Three Body Problem Trilogy',
		author: 'Cixin Liu',
		cover: '/images/book-covers/three-body-problem.jpg',
	},
	{
		title: '1984',
		author: 'George Orwell',
		cover: '/images/book-covers/1984.jpg',
	},
	{
		title: 'Snow Crash',
		author: 'Neal Stephenson',
		cover: '/images/book-covers/snow-crash.jpg',
	},
	{
		title: 'Lord of the Rings',
		author: 'J. R. R. Tolkien',
		cover: '/images/book-covers/lord-of-the-rings.jpg',
	},
	{
		title: 'The Adventures of Sherlock Holmes',
		author: 'Arthur Conan Doyle',
		cover: '/images/book-covers/sherlock-holmes.jpg',
	},
	{
		title: 'The Ocean at the End of the Lane',
		author: 'Neil Gaiman',
		cover: '/images/book-covers/ocean.webp',
	},
	{
		title: 'Dark Nights Metal',
		author: 'Scott Snyder',
		cover: '/images/book-covers/dark-nights-metal.jpg',
	},
	{
		title: 'House of X & Power of X',
		author: 'Jonathan Hickman',
		cover: '/images/book-covers/house-powers-of-x.jpg',
	},
	{
		title: 'Atomic Habits',
		author: 'James Clear',
		cover: '/images/book-covers/atomic-habits.jpg',
	},
	{
		title: 'Ego is the Enemy',
		author: 'Ryan Holiday',
		cover: '/images/book-covers/ego-is-the-enemy.jpg',
	},
	{
		title: 'Lives of the Stoics',
		author: 'Ryan Holiday',
		cover: '/images/book-covers/lives-of-the-stoics.jpg',
	},
	{
		title: 'The Subtle Art of not Giving a Fuck',
		author: 'Mark Manson',
		cover: '/images/book-covers/subtle-art.jpg',
	},
	{
		title: 'The War of Art',
		author: 'Steven Pressfield',
		cover: '/images/book-covers/the-war-of-art.jpg',
	},
	{
		title: "Surely You're Joking, Mr. Feynman!",
		author: 'Richard Feynman',
		cover: '/images/book-covers/surely-youre-joking.jpg',
	},
]
