const ALL_QUOTES = [
	{
		text: 'The unexamined life is not worth living.',
		author: 'Socrates',
		bio: 'Greek philosopher, 470–399 BC',
		category: 'Philosophy',
	},
	{
		text: 'In the middle of every difficulty lies opportunity.',
		author: 'Albert Einstein',
		bio: 'Theoretical physicist, 1879–1955',
		category: 'Resilience',
	},
	{
		text: 'It does not matter how slowly you go as long as you do not stop.',
		author: 'Confucius',
		bio: 'Chinese philosopher, 551–479 BC',
		category: 'Perseverance',
	},
	{
		text: 'The only way to do great work is to love what you do.',
		author: 'Steve Jobs',
		bio: 'Co-founder of Apple Inc.',
		category: 'Work',
	},
	{
		text: 'Imagination is more important than knowledge.',
		author: 'Albert Einstein',
		bio: 'Theoretical physicist, 1879–1955',
		category: 'Creativity',
	},
	{
		text: 'Life is what happens when you are busy making other plans.',
		author: 'John Lennon',
		bio: 'Musician & peace activist, 1940–1980',
		category: 'Life',
	},
	{
		text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
		author: 'Nelson Mandela',
		bio: 'South African statesman, 1918–2013',
		category: 'Resilience',
	},
	{
		text: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
		author: 'Mother Teresa',
		bio: 'Missionary & humanitarian, 1910–1997',
		category: 'Love',
	},
	{
		text: 'When you reach the end of your rope, tie a knot in it and hang on.',
		author: 'Franklin D. Roosevelt',
		bio: '32nd U.S. President, 1882–1945',
		category: 'Resilience',
	},
	{
		text: 'Always remember that you are absolutely unique. Just like everyone else.',
		author: 'Margaret Mead',
		bio: 'Cultural anthropologist, 1901–1978',
		category: 'Humor',
	},
	{
		text: 'Do not go where the path may lead; go instead where there is no path and leave a trail.',
		author: 'Ralph Waldo Emerson',
		bio: 'Essayist & philosopher, 1803–1882',
		category: 'Courage',
	},
	{
		text: 'You will face many defeats in life, but never let yourself be defeated.',
		author: 'Maya Angelou',
		bio: 'Poet & civil rights activist, 1928–2014',
		category: 'Resilience',
	},
	{
		text: 'The future belongs to those who believe in the beauty of their dreams.',
		author: 'Eleanor Roosevelt',
		bio: 'First Lady & diplomat, 1884–1962',
		category: 'Dreams',
	},
	{
		text: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
		author: 'Benjamin Franklin',
		bio: 'Founding Father & polymath, 1706–1790',
		category: 'Wisdom',
	},
	{
		text: 'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.',
		author: 'Helen Keller',
		bio: 'Author & activist, 1880–1968',
		category: 'Love',
	},
	{
		text: 'It is during our darkest moments that we must focus to see the light.',
		author: 'Aristotle',
		bio: 'Greek philosopher, 384–322 BC',
		category: 'Philosophy',
	},
	{
		text: 'Do not judge each day by the harvest you reap, but by the seeds that you plant.',
		author: 'Robert Louis Stevenson',
		bio: 'Scottish novelist, 1850–1894',
		category: 'Wisdom',
	},
	{
		text: 'Spread love everywhere you go.',
		author: 'Mother Teresa',
		bio: 'Missionary & humanitarian, 1910–1997',
		category: 'Love',
	},
	{
		text: 'When you change the way you look at things, the things you look at change.',
		author: 'Wayne Dyer',
		bio: 'Author & motivational speaker',
		category: 'Mindset',
	},
	{
		text: 'If life were predictable it would cease to be life, and be without flavor.',
		author: 'Eleanor Roosevelt',
		bio: 'First Lady & diplomat, 1884–1962',
		category: 'Life',
	},
	{
		text: "If you look at what you have in life, you'll always have more.",
		author: 'Oprah Winfrey',
		bio: 'Media mogul & philanthropist',
		category: 'Gratitude',
	},
	{
		text: 'If you want to lift yourself up, lift up someone else.',
		author: 'Booker T. Washington',
		bio: 'Educator & civil rights leader, 1856–1915',
		category: 'Kindness',
	},
	{
		text: 'No act of kindness, no matter how small, is ever wasted.',
		author: 'Aesop',
		bio: 'Greek storyteller, 620–564 BC',
		category: 'Kindness',
	},
	{
		text: 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
		author: 'Dr. Seuss',
		bio: 'Author & illustrator, 1904–1991',
		category: 'Courage',
	},
	{
		text: "If you tell the truth, you don't have to remember anything.",
		author: 'Mark Twain',
		bio: 'American author, 1835–1910',
		category: 'Wisdom',
	},
	{
		text: 'A friend is one who knows you as you are, understands where you have been, accepts what you have become — and still, gently, allows you to grow.',
		author: 'William Shakespeare',
		bio: 'English playwright, 1564–1616',
		category: 'Friendship',
	},
	{
		text: 'I alone cannot change the world, but I can cast a stone across the water to create many ripples.',
		author: 'Mother Teresa',
		bio: 'Missionary & humanitarian, 1910–1997',
		category: 'Kindness',
	},
	{
		text: "In three words I can sum up everything I've learned about life: it goes on.",
		author: 'Robert Frost',
		bio: 'American poet, 1874–1963',
		category: 'Life',
	},
	{
		text: 'If you want to achieve greatness stop asking for permission.',
		author: 'Anonymous',
		bio: 'Unknown origin',
		category: 'Courage',
	},
	{
		text: 'Things work out best for those who make the best of how things work out.',
		author: 'John Wooden',
		bio: 'Basketball coach & author, 1910–2010',
		category: 'Mindset',
	},
];

const CATEGORIES = ['All', ...new Set(ALL_QUOTES.map((q) => q.category))];

let currentCategory = 'All';
let filteredQuotes = [...ALL_QUOTES];
let seenIndices = [];
let exploredCount = 0;
let currentQuote = ALL_QUOTES[0];

function getFiltered() {
	return currentCategory === 'All'
		? ALL_QUOTES
		: ALL_QUOTES.filter((q) => q.category === currentCategory);
}

function nextQuote() {
	filteredQuotes = getFiltered();
	if (filteredQuotes.length === 0) return;

	if (seenIndices.length >= filteredQuotes.length) seenIndices = [];

	let idx;
	do {
		idx = Math.floor(Math.random() * filteredQuotes.length);
	} while (
		seenIndices.includes(idx) &&
		seenIndices.length < filteredQuotes.length
	);

	seenIndices.push(idx);
	currentQuote = filteredQuotes[idx];
	exploredCount++;
	renderQuote(currentQuote);
}

function renderQuote(q) {
	const stage = document.getElementById('quoteStage');
	stage.style.opacity = '0';
	stage.style.transition = 'opacity 0.2s ease';

	setTimeout(() => {
		document.getElementById('categoryTag').textContent = q.category;
		document.getElementById('quoteText').textContent = q.text;
		document.getElementById('authorName').textContent = q.author;
		document.getElementById('authorBio').textContent = q.bio;

		['categoryTag', 'quoteText', 'authorName'].forEach((id) => {
			const el = document.getElementById(id);
			el.style.animation = 'none';
			void el.offsetHeight;
			el.style.animation = '';
		});

		document.getElementById('counter').innerHTML =
			`${exploredCount} <span>explored</span>`;
		const pct = Math.min(
			(seenIndices.length / filteredQuotes.length) * 100,
			100,
		);
		document.getElementById('progressFill').style.width = pct + '%';

		stage.style.opacity = '1';
	}, 200);
}

function buildFilters() {
	const container = document.getElementById('categoryFilters');
	container.innerHTML = '';
	CATEGORIES.forEach((cat) => {
		const btn = document.createElement('button');
		btn.className = 'filter-pill' + (cat === currentCategory ? ' active' : '');
		btn.textContent = cat;
		btn.onclick = () => {
			currentCategory = cat;
			seenIndices = [];
			document
				.querySelectorAll('.filter-pill')
				.forEach((b) => b.classList.remove('active'));
			btn.classList.add('active');
			nextQuote();
		};
		container.appendChild(btn);
	});
}

function showToast(msg) {
	const t = document.getElementById('toast');
	t.textContent = msg;
	t.classList.add('show');
	setTimeout(() => t.classList.remove('show'), 2200);
}

document.getElementById('newQuoteBtn').onclick = nextQuote;

document.getElementById('copyBtn').onclick = () => {
	const text = `"${currentQuote.text}" — ${currentQuote.author}`;
	navigator.clipboard
		.writeText(text)
		.then(() => showToast('Copied to clipboard!'))
		.catch(() => {
			const ta = document.createElement('textarea');
			ta.value = text;
			document.body.appendChild(ta);
			ta.select();
			document.execCommand('copy');
			document.body.removeChild(ta);
			showToast('Copied!');
		});
};

document.getElementById('tweetBtn').onclick = () => {
	const text = encodeURIComponent(
		`"${currentQuote.text}" — ${currentQuote.author}`,
	);
	window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
};

buildFilters();
exploredCount = 1;
document.getElementById('counter').innerHTML = `1 <span>explored</span>`;
document.getElementById('progressFill').style.width =
	(1 / ALL_QUOTES.length) * 100 + '%';
