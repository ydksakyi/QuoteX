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
		category: 'Resilience',
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
	{
		text: 'The only true wisdom is in knowing you know nothing.',
		author: 'Socrates',
		bio: 'Greek philosopher, c. 470–399 BCE',
		category: 'Wisdom',
	},
	{
		text: 'The unexamined life is not worth living.',
		author: 'Socrates',
		bio: 'Greek philosopher, c. 470–399 BCE',
		category: 'Wisdom',
	},
	{
		text: 'I think, therefore I am.',
		author: 'René Descartes',
		bio: 'French philosopher, 1596–1650',
		category: 'Mindset',
	},
	{
		text: 'Knowledge itself is power.',
		author: 'Francis Bacon',
		bio: 'English philosopher & statesman, 1561–1626',
		category: 'Education',
	},
	{
		text: 'Reading maketh a full man; conference a ready man; and writing an exact man.',
		author: 'Francis Bacon',
		bio: 'English philosopher & statesman, 1561–1626',
		category: 'Education',
	},
	{
		text: 'What is truth? said jesting Pilate; and would not stay for an answer.',
		author: 'Francis Bacon',
		bio: 'English philosopher & statesman, 1561–1626',
		category: 'Wisdom',
	},
	{
		text: 'To be, or not to be: that is the question.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Life',
	},
	{
		text: "All the world's a stage, and all the men and women merely players.",
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Life',
	},
	{
		text: 'We know what we are, but know not what we may be.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Mindset',
	},
	{
		text: 'This above all: to thine own self be true.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Mindset',
	},
	{
		text: 'The better part of valor is discretion.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Wisdom',
	},
	{
		text: 'Brevity is the soul of wit.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Wisdom',
	},
	{
		text: 'There is nothing either good or bad, but thinking makes it so.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Mindset',
	},
	{
		text: 'Cowards die many times before their deaths; the valiant never taste of death but once.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Courage',
	},
	{
		text: 'Our doubts are traitors, and make us lose the good we oft might win.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Mindset',
	},
	{
		text: 'The course of true love never did run smooth.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Love',
	},
	{
		text: 'Uneasy lies the head that wears a crown.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Leadership',
	},
	{
		text: 'Better three hours too soon than a minute too late.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Time',
	},
	{
		text: 'There is no darkness but ignorance.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Education',
	},
	{
		text: 'The pen is mightier than the sword.',
		author: 'Edward Bulwer-Lytton',
		bio: 'English novelist & playwright, 1803–1873',
		category: 'Leadership',
	},
	{
		text: 'Fortune favors the bold.',
		author: 'Virgil',
		bio: 'Roman poet, 70–19 BCE',
		category: 'Courage',
	},
	{
		text: 'Carpe diem.',
		author: 'Horace',
		bio: 'Roman poet, 65–8 BCE',
		category: 'Time',
	},
	{
		text: 'Adversity has the effect of eliciting talents which in prosperous circumstances would have lain dormant.',
		author: 'Horace',
		bio: 'Roman poet, 65–8 BCE',
		category: 'Resilience',
	},
	{
		text: 'No one can make you feel inferior without your consent.',
		author: 'Eleanor Roosevelt',
		bio: 'American diplomat & first lady, 1884–1962',
		category: 'Mindset',
	},
	{
		text: 'Do one thing every day that scares you.',
		author: 'Eleanor Roosevelt',
		bio: 'American diplomat & first lady, 1884–1962',
		category: 'Courage',
	},
	{
		text: 'The future belongs to those who believe in the beauty of their dreams.',
		author: 'Eleanor Roosevelt',
		bio: 'American diplomat & first lady, 1884–1962',
		category: 'Dreams',
	},
	{
		text: 'The purpose of life is to live it, to taste experience to the utmost.',
		author: 'Eleanor Roosevelt',
		bio: 'American diplomat & first lady, 1884–1962',
		category: 'Life',
	},
	{
		text: 'You must do the thing you think you cannot do.',
		author: 'Eleanor Roosevelt',
		bio: 'American diplomat & first lady, 1884–1962',
		category: 'Courage',
	},
	{
		text: 'The only limit to our realization of tomorrow is our doubts of today.',
		author: 'Franklin D. Roosevelt',
		bio: 'U.S. president, 1882–1945',
		category: 'Mindset',
	},
	{
		text: 'The only thing we have to fear is fear itself.',
		author: 'Franklin D. Roosevelt',
		bio: 'U.S. president, 1882–1945',
		category: 'Courage',
	},
	{
		text: 'Happiness lies in the joy of achievement and the thrill of creative effort.',
		author: 'Franklin D. Roosevelt',
		bio: 'U.S. president, 1882–1945',
		category: 'Happiness',
	},
	{
		text: 'When you reach the end of your rope, tie a knot in it and hang on.',
		author: 'Franklin D. Roosevelt',
		bio: 'U.S. president, 1882–1945',
		category: 'Resilience',
	},
	{
		text: 'The only man who never makes a mistake is the man who never does anything.',
		author: 'Theodore Roosevelt',
		bio: 'U.S. president, 1858–1919',
		category: 'Mindset',
	},
	{
		text: 'Keep your eyes on the stars, and your feet on the ground.',
		author: 'Theodore Roosevelt',
		bio: 'U.S. president, 1858–1919',
		category: 'Mindset',
	},
	{
		text: 'Far and away the best prize that life offers is the chance to work hard at work worth doing.',
		author: 'Theodore Roosevelt',
		bio: 'U.S. president, 1858–1919',
		category: 'Work',
	},
	{
		text: 'Do what you can, with what you have, where you are.',
		author: 'Theodore Roosevelt',
		bio: 'U.S. president, 1858–1919',
		category: 'Action',
	},
	{
		text: 'Nothing in the world is worth having or worth doing unless it means effort, pain, difficulty.',
		author: 'Theodore Roosevelt',
		bio: 'U.S. president, 1858–1919',
		category: 'Discipline',
	},
	{
		text: 'The credit belongs to the man who is actually in the arena.',
		author: 'Theodore Roosevelt',
		bio: 'U.S. president, 1858–1919',
		category: 'Courage',
	},
	{
		text: 'It is hard to fail, but it is worse never to have tried to succeed.',
		author: 'Theodore Roosevelt',
		bio: 'U.S. president, 1858–1919',
		category: 'Growth',
	},
	{
		text: 'The best way out is always through.',
		author: 'Robert Frost',
		bio: 'American poet, 1874–1963',
		category: 'Resilience',
	},
	{
		text: "In three words I can sum up everything I've learned about life: it goes on.",
		author: 'Robert Frost',
		bio: 'American poet, 1874–1963',
		category: 'Life',
	},
	{
		text: 'The woods are lovely, dark and deep, but I have promises to keep.',
		author: 'Robert Frost',
		bio: 'American poet, 1874–1963',
		category: 'Discipline',
	},
	{
		text: 'Nothing gold can stay.',
		author: 'Robert Frost',
		bio: 'American poet, 1874–1963',
		category: 'Change',
	},
	{
		text: 'Two roads diverged in a wood, and I—I took the one less traveled by.',
		author: 'Robert Frost',
		bio: 'American poet, 1874–1963',
		category: 'Courage',
	},
	{
		text: "Life is what happens to you while you're busy making other plans.",
		author: 'John Lennon',
		bio: 'English musician, 1940–1980',
		category: 'Life',
	},
	{
		text: "You may say I'm a dreamer, but I'm not the only one.",
		author: 'John Lennon',
		bio: 'English musician, 1940–1980',
		category: 'Dreams',
	},
	{
		text: 'All you need is love.',
		author: 'John Lennon',
		bio: 'English musician, 1940–1980',
		category: 'Love',
	},
	{
		text: 'The time you enjoy wasting is not wasted time.',
		author: 'John Lennon',
		bio: 'English musician, 1940–1980',
		category: 'Happiness',
	},
	{
		text: 'Imagine all the people living life in peace.',
		author: 'John Lennon',
		bio: 'English musician, 1940–1980',
		category: 'Peace',
	},
	{
		text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
		author: 'Nelson Mandela',
		bio: 'South African president & activist, 1918–2013',
		category: 'Resilience',
	},
	{
		text: "It always seems impossible until it's done.",
		author: 'Nelson Mandela',
		bio: 'South African president & activist, 1918–2013',
		category: 'Mindset',
	},
	{
		text: 'Education is the most powerful weapon which you can use to change the world.',
		author: 'Nelson Mandela',
		bio: 'South African president & activist, 1918–2013',
		category: 'Education',
	},
	{
		text: 'A winner is a dreamer who never gives up.',
		author: 'Nelson Mandela',
		bio: 'South African president & activist, 1918–2013',
		category: 'Resilience',
	},
	{
		text: 'May your choices reflect your hopes, not your fears.',
		author: 'Nelson Mandela',
		bio: 'South African president & activist, 1918–2013',
		category: 'Courage',
	},
	{
		text: 'The greatest weapon against stress is our ability to choose one thought over another.',
		author: 'William James',
		bio: 'American philosopher & psychologist, 1842–1910',
		category: 'Mindset',
	},
	{
		text: 'Act as if what you do makes a difference. It does.',
		author: 'William James',
		bio: 'American philosopher & psychologist, 1842–1910',
		category: 'Action',
	},
	{
		text: 'Nothing is so fatiguing as the eternal hanging on of an uncompleted task.',
		author: 'William James',
		bio: 'American philosopher & psychologist, 1842–1910',
		category: 'Productivity',
	},
	{
		text: 'The greatest use of life is to spend it for something that will outlast life.',
		author: 'William James',
		bio: 'American philosopher & psychologist, 1842–1910',
		category: 'Purpose',
	},
	{
		text: 'My experience is what I agree to attend to.',
		author: 'William James',
		bio: 'American philosopher & psychologist, 1842–1910',
		category: 'Mindfulness',
	},
	{
		text: 'The deepest principle in human nature is the craving to be appreciated.',
		author: 'William James',
		bio: 'American philosopher & psychologist, 1842–1910',
		category: 'Relationships',
	},
	{
		text: 'He who has a why to live can bear almost any how.',
		author: 'Friedrich Nietzsche',
		bio: 'German philosopher, 1844–1900',
		category: 'Purpose',
	},
	{
		text: 'That which does not kill us makes us stronger.',
		author: 'Friedrich Nietzsche',
		bio: 'German philosopher, 1844–1900',
		category: 'Resilience',
	},
	{
		text: 'Become who you are.',
		author: 'Friedrich Nietzsche',
		bio: 'German philosopher, 1844–1900',
		category: 'Identity',
	},
	{
		text: 'Without music, life would be a mistake.',
		author: 'Friedrich Nietzsche',
		bio: 'German philosopher, 1844–1900',
		category: 'Creativity',
	},
	{
		text: 'There are no facts, only interpretations.',
		author: 'Friedrich Nietzsche',
		bio: 'German philosopher, 1844–1900',
		category: 'Mindset',
	},
	{
		text: 'One must still have chaos in oneself to be able to give birth to a dancing star.',
		author: 'Friedrich Nietzsche',
		bio: 'German philosopher, 1844–1900',
		category: 'Creativity',
	},
	{
		text: 'The mind is everything. What you think you become.',
		author: 'Gautama Buddha',
		bio: 'Spiritual teacher, traditionally 5th century BCE',
		category: 'Mindset',
	},
	{
		text: 'Peace comes from within. Do not seek it without.',
		author: 'Gautama Buddha',
		bio: 'Spiritual teacher, traditionally 5th century BCE',
		category: 'Peace',
	},
	{
		text: 'Three things cannot be long hidden: the sun, the moon, and the truth.',
		author: 'Gautama Buddha',
		bio: 'Spiritual teacher, traditionally 5th century BCE',
		category: 'Truth',
	},
	{
		text: 'What we think, we become.',
		author: 'Gautama Buddha',
		bio: 'Spiritual teacher, traditionally 5th century BCE',
		category: 'Mindset',
	},
	{
		text: 'Better than a thousand hollow words is one word that brings peace.',
		author: 'Gautama Buddha',
		bio: 'Spiritual teacher, traditionally 5th century BCE',
		category: 'Peace',
	},
	{
		text: 'Knowing others is intelligence; knowing yourself is true wisdom.',
		author: 'Lao Tzu',
		bio: 'Chinese philosopher, traditionally 6th century BCE',
		category: 'Wisdom',
	},
	{
		text: 'A journey of a thousand miles begins with a single step.',
		author: 'Lao Tzu',
		bio: 'Chinese philosopher, traditionally 6th century BCE',
		category: 'Action',
	},
	{
		text: 'When I let go of what I am, I become what I might be.',
		author: 'Lao Tzu',
		bio: 'Chinese philosopher, traditionally 6th century BCE',
		category: 'Change',
	},
	{
		text: 'He who conquers others is strong; he who conquers himself is mighty.',
		author: 'Lao Tzu',
		bio: 'Chinese philosopher, traditionally 6th century BCE',
		category: 'Discipline',
	},
	{
		text: 'Nature does not hurry, yet everything is accomplished.',
		author: 'Lao Tzu',
		bio: 'Chinese philosopher, traditionally 6th century BCE',
		category: 'Patience',
	},
	{
		text: 'A leader is best when people barely know he exists.',
		author: 'Lao Tzu',
		bio: 'Chinese philosopher, traditionally 6th century BCE',
		category: 'Leadership',
	},
	{
		text: 'Silence is a source of great strength.',
		author: 'Lao Tzu',
		bio: 'Chinese philosopher, traditionally 6th century BCE',
		category: 'Wisdom',
	},
	{
		text: 'Everything has beauty, but not everyone sees it.',
		author: 'Confucius',
		bio: 'Chinese philosopher, 551–479 BCE',
		category: 'Mindset',
	},
	{
		text: 'It does not matter how slowly you go as long as you do not stop.',
		author: 'Confucius',
		bio: 'Chinese philosopher, 551–479 BCE',
		category: 'Resilience',
	},
	{
		text: "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
		author: 'Confucius',
		bio: 'Chinese philosopher, 551–479 BCE',
		category: 'Action',
	},
	{
		text: 'He who asks a question is a fool for five minutes; he who does not ask remains a fool forever.',
		author: 'Confucius',
		bio: 'Chinese philosopher, 551–479 BCE',
		category: 'Education',
	},
	{
		text: 'Wherever you go, go with all your heart.',
		author: 'Confucius',
		bio: 'Chinese philosopher, 551–479 BCE',
		category: 'Mindset',
	},
	{
		text: 'The happiness of your life depends upon the quality of your thoughts.',
		author: 'Marcus Aurelius',
		bio: 'Roman emperor & Stoic philosopher, 121–180',
		category: 'Mindset',
	},
	{
		text: 'You have power over your mind—not outside events. Realize this, and you will find strength.',
		author: 'Marcus Aurelius',
		bio: 'Roman emperor & Stoic philosopher, 121–180',
		category: 'Self-control',
	},
	{
		text: 'The soul becomes dyed with the colour of its thoughts.',
		author: 'Marcus Aurelius',
		bio: 'Roman emperor & Stoic philosopher, 121–180',
		category: 'Mindset',
	},
	{
		text: 'Waste no more time arguing about what a good man should be. Be one.',
		author: 'Marcus Aurelius',
		bio: 'Roman emperor & Stoic philosopher, 121–180',
		category: 'Character',
	},
	{
		text: 'The best revenge is to be unlike him who performed the injury.',
		author: 'Marcus Aurelius',
		bio: 'Roman emperor & Stoic philosopher, 121–180',
		category: 'Character',
	},
	{
		text: 'Very little is needed to make a happy life; it is all within yourself.',
		author: 'Marcus Aurelius',
		bio: 'Roman emperor & Stoic philosopher, 121–180',
		category: 'Happiness',
	},
	{
		text: 'If it is not right do not do it; if it is not true do not say it.',
		author: 'Marcus Aurelius',
		bio: 'Roman emperor & Stoic philosopher, 121–180',
		category: 'Integrity',
	},
	{
		text: 'Do every act of your life as though it were the very last act of your life.',
		author: 'Marcus Aurelius',
		bio: 'Roman emperor & Stoic philosopher, 121–180',
		category: 'Mindfulness',
	},
	{
		text: 'We suffer more often in imagination than in reality.',
		author: 'Seneca',
		bio: 'Roman Stoic philosopher, c. 4 BCE–65 CE',
		category: 'Mindset',
	},
	{
		text: 'Luck is what happens when preparation meets opportunity.',
		author: 'Seneca',
		bio: 'Roman Stoic philosopher, c. 4 BCE–65 CE',
		category: 'Preparation',
	},
	{
		text: 'Difficulties strengthen the mind, as labor does the body.',
		author: 'Seneca',
		bio: 'Roman Stoic philosopher, c. 4 BCE–65 CE',
		category: 'Resilience',
	},
	{
		text: 'It is not that we have a short time to live, but that we waste a lot of it.',
		author: 'Seneca',
		bio: 'Roman Stoic philosopher, c. 4 BCE–65 CE',
		category: 'Time',
	},
	{
		text: 'He who is brave is free.',
		author: 'Seneca',
		bio: 'Roman Stoic philosopher, c. 4 BCE–65 CE',
		category: 'Courage',
	},
	{
		text: 'While we wait for life, life passes.',
		author: 'Seneca',
		bio: 'Roman Stoic philosopher, c. 4 BCE–65 CE',
		category: 'Time',
	},
	{
		text: 'A man who suffers before it is necessary, suffers more than is necessary.',
		author: 'Seneca',
		bio: 'Roman Stoic philosopher, c. 4 BCE–65 CE',
		category: 'Mindset',
	},
	{
		text: 'Associate with people who are likely to improve you.',
		author: 'Seneca',
		bio: 'Roman Stoic philosopher, c. 4 BCE–65 CE',
		category: 'Relationships',
	},
	{
		text: 'The greatest wealth is to live content with little.',
		author: 'Plato',
		bio: 'Greek philosopher, c. 428–348 BCE',
		category: 'Happiness',
	},
	{
		text: 'Courage is knowing what not to fear.',
		author: 'Plato',
		bio: 'Greek philosopher, c. 428–348 BCE',
		category: 'Courage',
	},
	{
		text: 'Wise men speak because they have something to say; fools because they have to say something.',
		author: 'Plato',
		bio: 'Greek philosopher, c. 428–348 BCE',
		category: 'Wisdom',
	},
	{
		text: 'Opinion is the medium between knowledge and ignorance.',
		author: 'Plato',
		bio: 'Greek philosopher, c. 428–348 BCE',
		category: 'Education',
	},
	{
		text: 'At the touch of love everyone becomes a poet.',
		author: 'Plato',
		bio: 'Greek philosopher, c. 428–348 BCE',
		category: 'Love',
	},
	{
		text: 'The beginning is the most important part of the work.',
		author: 'Plato',
		bio: 'Greek philosopher, c. 428–348 BCE',
		category: 'Action',
	},
	{
		text: 'Happiness depends upon ourselves.',
		author: 'Aristotle',
		bio: 'Greek philosopher, 384–322 BCE',
		category: 'Happiness',
	},
	{
		text: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
		author: 'Aristotle',
		bio: 'Greek philosopher, 384–322 BCE',
		category: 'Discipline',
	},
	{
		text: 'The roots of education are bitter, but the fruit is sweet.',
		author: 'Aristotle',
		bio: 'Greek philosopher, 384–322 BCE',
		category: 'Education',
	},
	{
		text: 'Pleasure in the job puts perfection in the work.',
		author: 'Aristotle',
		bio: 'Greek philosopher, 384–322 BCE',
		category: 'Work',
	},
	{
		text: 'The whole is greater than the sum of its parts.',
		author: 'Aristotle',
		bio: 'Greek philosopher, 384–322 BCE',
		category: 'Systems',
	},
	{
		text: 'The secret of getting ahead is getting started.',
		author: 'Mark Twain',
		bio: 'American writer & humorist, 1835–1910',
		category: 'Action',
	},
	{
		text: 'The best way to cheer yourself is to try to cheer somebody else up.',
		author: 'Mark Twain',
		bio: 'American writer & humorist, 1835–1910',
		category: 'Mindset',
	},
	{
		text: 'Courage is resistance to fear, mastery of fear—not absence of fear.',
		author: 'Mark Twain',
		bio: 'American writer & humorist, 1835–1910',
		category: 'Courage',
	},
	{
		text: 'Kindness is the language which the deaf can hear and the blind can see.',
		author: 'Mark Twain',
		bio: 'American writer & humorist, 1835–1910',
		category: 'Kindness',
	},
	{
		text: 'Whenever you find yourself on the side of the majority, it is time to pause and reflect.',
		author: 'Mark Twain',
		bio: 'American writer & humorist, 1835–1910',
		category: 'Mindset',
	},
	{
		text: "Age is an issue of mind over matter. If you don't mind, it doesn't matter.",
		author: 'Mark Twain',
		bio: 'American writer & humorist, 1835–1910',
		category: 'Mindset',
	},
	{
		text: 'Continuous improvement is better than delayed perfection.',
		author: 'Mark Twain',
		bio: 'American writer & humorist, 1835–1910',
		category: 'Growth',
	},
	{
		text: 'It is never too late to be what you might have been.',
		author: 'George Eliot',
		bio: 'English novelist, 1819–1880',
		category: 'Change',
	},
	{
		text: 'What do we live for, if it is not to make life less difficult for each other?',
		author: 'George Eliot',
		bio: 'English novelist, 1819–1880',
		category: 'Kindness',
	},
	{
		text: 'The strongest principle of growth lies in human choice.',
		author: 'George Eliot',
		bio: 'English novelist, 1819–1880',
		category: 'Growth',
	},
	{
		text: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
		author: 'Amelia Earhart',
		bio: 'American aviation pioneer, 1897–1937',
		category: 'Action',
	},
	{
		text: 'Adventure is worthwhile in itself.',
		author: 'Amelia Earhart',
		bio: 'American aviation pioneer, 1897–1937',
		category: 'Life',
	},
	{
		text: "Never interrupt someone doing what you said couldn't be done.",
		author: 'Amelia Earhart',
		bio: 'American aviation pioneer, 1897–1937',
		category: 'Mindset',
	},
	{
		text: 'Women must try to do things as men have tried. When they fail their failure must be but a challenge to others.',
		author: 'Amelia Earhart',
		bio: 'American aviation pioneer, 1897–1937',
		category: 'Courage',
	},
	{
		text: 'The most effective way to do it, is to do it.',
		author: 'Amelia Earhart',
		bio: 'American aviation pioneer, 1897–1937',
		category: 'Action',
	},
	{
		text: 'I have often said that the lure of flying is the lure of beauty.',
		author: 'Amelia Earhart',
		bio: 'American aviation pioneer, 1897–1937',
		category: 'Adventure',
	},
	{
		text: 'A life without a cause is a life without an effect.',
		author: 'Barack Obama',
		bio: 'American president, born 1961',
		category: 'Purpose',
	},
	{
		text: 'Change will not come if we wait for some other person or some other time.',
		author: 'Barack Obama',
		bio: 'American president, born 1961',
		category: 'Action',
	},
	{
		text: "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
		author: 'Barack Obama',
		bio: 'American president, born 1961',
		category: 'Resilience',
	},
	{
		text: 'The future rewards those who press on.',
		author: 'Barack Obama',
		bio: 'American president, born 1961',
		category: 'Resilience',
	},
	{
		text: 'We are the change we seek.',
		author: 'Barack Obama',
		bio: 'American president, born 1961',
		category: 'Change',
	},
	{
		text: 'The best way to not feel hopeless is to get up and do something.',
		author: 'Barack Obama',
		bio: 'American president, born 1961',
		category: 'Action',
	},
	{
		text: 'If you work hard and meet your responsibilities, you can get ahead.',
		author: 'Barack Obama',
		bio: 'American president, born 1961',
		category: 'Work',
	},
	{
		text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
		author: 'Winston Churchill',
		bio: 'British statesman, 1874–1965',
		category: 'Resilience',
	},
	{
		text: "If you're going through hell, keep going.",
		author: 'Winston Churchill',
		bio: 'British statesman, 1874–1965',
		category: 'Resilience',
	},
	{
		text: 'Never, never, never give up.',
		author: 'Winston Churchill',
		bio: 'British statesman, 1874–1965',
		category: 'Resilience',
	},
	{
		text: 'We make a living by what we get, but we make a life by what we give.',
		author: 'Winston Churchill',
		bio: 'British statesman, 1874–1965',
		category: 'Purpose',
	},
	{
		text: 'To improve is to change; to be perfect is to change often.',
		author: 'Winston Churchill',
		bio: 'British statesman, 1874–1965',
		category: 'Growth',
	},
	{
		text: 'Attitude is a little thing that makes a big difference.',
		author: 'Winston Churchill',
		bio: 'British statesman, 1874–1965',
		category: 'Mindset',
	},
	{
		text: "You have enemies? Good. That means you've stood up for something, sometime in your life.",
		author: 'Winston Churchill',
		bio: 'British statesman, 1874–1965',
		category: 'Courage',
	},
	{
		text: 'Kites rise highest against the wind—not with it.',
		author: 'Winston Churchill',
		bio: 'British statesman, 1874–1965',
		category: 'Resilience',
	},
	{
		text: 'You can never cross the ocean until you have the courage to lose sight of the shore.',
		author: 'Christopher Columbus',
		bio: 'Italian explorer, 1451–1506',
		category: 'Courage',
	},
	{
		text: 'One today is worth two tomorrows.',
		author: 'Benjamin Franklin',
		bio: 'American statesman & inventor, 1706–1790',
		category: 'Time',
	},
	{
		text: 'Lost time is never found again.',
		author: 'Benjamin Franklin',
		bio: 'American statesman & inventor, 1706–1790',
		category: 'Time',
	},
	{
		text: 'An investment in knowledge pays the best interest.',
		author: 'Benjamin Franklin',
		bio: 'American statesman & inventor, 1706–1790',
		category: 'Education',
	},
	{
		text: 'By failing to prepare, you are preparing to fail.',
		author: 'Benjamin Franklin',
		bio: 'American statesman & inventor, 1706–1790',
		category: 'Preparation',
	},
	{
		text: 'Well done is better than well said.',
		author: 'Benjamin Franklin',
		bio: 'American statesman & inventor, 1706–1790',
		category: 'Action',
	},
	{
		text: 'Energy and persistence conquer all things.',
		author: 'Benjamin Franklin',
		bio: 'American statesman & inventor, 1706–1790',
		category: 'Resilience',
	},
	{
		text: 'He that can have patience can have what he will.',
		author: 'Benjamin Franklin',
		bio: 'American statesman & inventor, 1706–1790',
		category: 'Patience',
	},
	{
		text: 'Diligence is the mother of good luck.',
		author: 'Benjamin Franklin',
		bio: 'American statesman & inventor, 1706–1790',
		category: 'Discipline',
	},
	{
		text: 'A penny saved is a penny earned.',
		author: 'Benjamin Franklin',
		bio: 'American statesman & inventor, 1706–1790',
		category: 'Money',
	},
	{
		text: 'Either write something worth reading or do something worth writing.',
		author: 'Benjamin Franklin',
		bio: 'American statesman & inventor, 1706–1790',
		category: 'Creativity',
	},
	{
		text: 'The future depends on what you do today.',
		author: 'Mahatma Gandhi',
		bio: 'Indian independence leader, 1869–1948',
		category: 'Action',
	},
	{
		text: 'Be the change that you wish to see in the world.',
		author: 'Mahatma Gandhi',
		bio: 'Indian independence leader, 1869–1948',
		category: 'Change',
	},
	{
		text: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
		author: 'Mahatma Gandhi',
		bio: 'Indian independence leader, 1869–1948',
		category: 'Education',
	},
	{
		text: 'Strength does not come from physical capacity. It comes from an indomitable will.',
		author: 'Mahatma Gandhi',
		bio: 'Indian independence leader, 1869–1948',
		category: 'Strength',
	},
	{
		text: 'In a gentle way, you can shake the world.',
		author: 'Mahatma Gandhi',
		bio: 'Indian independence leader, 1869–1948',
		category: 'Leadership',
	},
	{
		text: 'The weak can never forgive. Forgiveness is the attribute of the strong.',
		author: 'Mahatma Gandhi',
		bio: 'Indian independence leader, 1869–1948',
		category: 'Strength',
	},
	{
		text: 'An eye for an eye only ends up making the whole world blind.',
		author: 'Mahatma Gandhi',
		bio: 'Indian independence leader, 1869–1948',
		category: 'Peace',
	},
	{
		text: 'Happiness is when what you think, what you say, and what you do are in harmony.',
		author: 'Mahatma Gandhi',
		bio: 'Indian independence leader, 1869–1948',
		category: 'Happiness',
	},
	{
		text: 'Where there is love there is life.',
		author: 'Mahatma Gandhi',
		bio: 'Indian independence leader, 1869–1948',
		category: 'Love',
	},
	{
		text: 'The greatness of a nation can be judged by the way its animals are treated.',
		author: 'Mahatma Gandhi',
		bio: 'Indian independence leader, 1869–1948',
		category: 'Compassion',
	},
	{
		text: 'If you want to go fast, go alone. If you want to go far, go together.',
		author: 'African proverb',
		bio: 'Traditional African proverb',
		category: 'Teamwork',
	},
	{
		text: 'A tree is known by its fruit.',
		author: 'African proverb',
		bio: 'Traditional African proverb',
		category: 'Character',
	},
	{
		text: 'Wisdom is like a baobab tree; no one individual can embrace it.',
		author: 'African proverb',
		bio: 'Traditional African proverb',
		category: 'Wisdom',
	},
	{
		text: 'If you want to know the end, look at the beginning.',
		author: 'African proverb',
		bio: 'Traditional African proverb',
		category: 'Wisdom',
	},
	{
		text: 'The child who is not embraced by the village will burn it down to feel its warmth.',
		author: 'African proverb',
		bio: 'Traditional African proverb',
		category: 'Community',
	},
	{
		text: 'When there is no enemy within, the enemy outside can do you no harm.',
		author: 'African proverb',
		bio: 'Traditional African proverb',
		category: 'Resilience',
	},
	{
		text: 'However long the night, the dawn will break.',
		author: 'African proverb',
		bio: 'Traditional African proverb',
		category: 'Hope',
	},
	{
		text: 'A bird that you see in the morning may not be the bird you see at night.',
		author: 'African proverb',
		bio: 'Traditional African proverb',
		category: 'Change',
	},
	{
		text: 'Little by little, the bird builds its nest.',
		author: 'African proverb',
		bio: 'Traditional African proverb',
		category: 'Resilience',
	},
	{
		text: 'Rain does not fall on one roof alone.',
		author: 'African proverb',
		bio: 'Traditional African proverb',
		category: 'Community',
	},
	{
		text: 'The river that forgets its source will dry up.',
		author: 'African proverb',
		bio: 'Traditional African proverb',
		category: 'Mindset',
	},
	{
		text: 'A fool speaks, a wise man listens.',
		author: 'African proverb',
		bio: 'Traditional African proverb',
		category: 'Wisdom',
	},
	{
		text: "The one who asks questions doesn't lose the way.",
		author: 'African proverb',
		bio: 'Traditional African proverb',
		category: 'Learning',
	},
	{
		text: 'He who learns, teaches.',
		author: 'African proverb',
		bio: 'Traditional African proverb',
		category: 'Education',
	},
	{
		text: 'A smooth sea never made a skilled sailor.',
		author: 'Traditional proverb',
		bio: 'Traditional proverb',
		category: 'Resilience',
	},
	{
		text: 'A stitch in time saves nine.',
		author: 'English proverb',
		bio: 'Traditional English proverb',
		category: 'Preparation',
	},
	{
		text: 'Actions speak louder than words.',
		author: 'English proverb',
		bio: 'Traditional English proverb',
		category: 'Action',
	},
	{
		text: "Where there's a will, there's a way.",
		author: 'English proverb',
		bio: 'Traditional English proverb',
		category: 'Resilience',
	},
	{
		text: 'Practice makes perfect.',
		author: 'English proverb',
		bio: 'Traditional English proverb',
		category: 'Discipline',
	},
	{
		text: 'Better late than never.',
		author: 'English proverb',
		bio: 'Traditional English proverb',
		category: 'Time',
	},
	{
		text: 'Look before you leap.',
		author: 'English proverb',
		bio: 'Traditional English proverb',
		category: 'Wisdom',
	},
	{
		text: 'Two heads are better than one.',
		author: 'English proverb',
		bio: 'Traditional English proverb',
		category: 'Teamwork',
	},
	{
		text: "Don't count your chickens before they hatch.",
		author: 'English proverb',
		bio: 'Traditional English proverb',
		category: 'Planning',
	},
	{
		text: 'A rolling stone gathers no moss.',
		author: 'English proverb',
		bio: 'Traditional English proverb',
		category: 'Change',
	},
	{
		text: 'Every cloud has a silver lining.',
		author: 'English proverb',
		bio: 'Traditional English proverb',
		category: 'Hope',
	},
	{
		text: 'The early bird catches the worm.',
		author: 'English proverb',
		bio: 'Traditional English proverb',
		category: 'Action',
	},
	{
		text: 'Necessity is the mother of invention.',
		author: 'English proverb',
		bio: 'Traditional English proverb',
		category: 'Creativity',
	},
	{
		text: 'Where there is smoke, there is fire.',
		author: 'English proverb',
		bio: 'Traditional English proverb',
		category: 'Wisdom',
	},
	{
		text: 'Honesty is the best policy.',
		author: 'English proverb',
		bio: 'Traditional English proverb',
		category: 'Integrity',
	},
	{
		text: 'A friend in need is a friend indeed.',
		author: 'English proverb',
		bio: 'Traditional English proverb',
		category: 'Friendship',
	},
	{
		text: 'No man is an island.',
		author: 'John Donne',
		bio: 'English poet & cleric, 1572–1631',
		category: 'Community',
	},
	{
		text: 'For whom the bell tolls; it tolls for thee.',
		author: 'John Donne',
		bio: 'English poet & cleric, 1572–1631',
		category: 'Life',
	},
	{
		text: 'Death be not proud, though some have called thee mighty and dreadful.',
		author: 'John Donne',
		bio: 'English poet & cleric, 1572–1631',
		category: 'Courage',
	},
	{
		text: 'Never send to know for whom the bell tolls; it tolls for thee.',
		author: 'John Donne',
		bio: 'English poet & cleric, 1572–1631',
		category: 'Community',
	},
	{
		text: 'Hope springs eternal in the human breast.',
		author: 'Alexander Pope',
		bio: 'English poet, 1688–1744',
		category: 'Hope',
	},
	{
		text: 'To err is human; to forgive, divine.',
		author: 'Alexander Pope',
		bio: 'English poet, 1688–1744',
		category: 'Forgiveness',
	},
	{
		text: 'A little learning is a dangerous thing.',
		author: 'Alexander Pope',
		bio: 'English poet, 1688–1744',
		category: 'Education',
	},
	{
		text: 'Fools rush in where angels fear to tread.',
		author: 'Alexander Pope',
		bio: 'English poet, 1688–1744',
		category: 'Wisdom',
	},
	{
		text: "An honest man's the noblest work of God.",
		author: 'Alexander Pope',
		bio: 'English poet, 1688–1744',
		category: 'Integrity',
	},
	{
		text: 'Beauty is truth, truth beauty.',
		author: 'John Keats',
		bio: 'English Romantic poet, 1795–1821',
		category: 'Perspective',
	},
	{
		text: 'A thing of beauty is a joy for ever.',
		author: 'John Keats',
		bio: 'English Romantic poet, 1795–1821',
		category: 'Perspective',
	},
	{
		text: 'Heard melodies are sweet, but those unheard are sweeter.',
		author: 'John Keats',
		bio: 'English Romantic poet, 1795–1821',
		category: 'Creativity',
	},
	{
		text: 'Nothing ever becomes real till it is experienced.',
		author: 'John Keats',
		bio: 'English Romantic poet, 1795–1821',
		category: 'Perspective',
	},
	{
		text: 'The poetry of earth is never dead.',
		author: 'John Keats',
		bio: 'English Romantic poet, 1795–1821',
		category: 'Perspective',
	},
	{
		text: 'If Winter comes, can Spring be far behind?',
		author: 'Percy Bysshe Shelley',
		bio: 'English Romantic poet, 1792–1822',
		category: 'Hope',
	},
	{
		text: 'Our sweetest songs are those that tell of saddest thought.',
		author: 'Percy Bysshe Shelley',
		bio: 'English Romantic poet, 1792–1822',
		category: 'Creativity',
	},
	{
		text: 'Rise like Lions after slumber.',
		author: 'Percy Bysshe Shelley',
		bio: 'English Romantic poet, 1792–1822',
		category: 'Courage',
	},
	{
		text: 'Poets and philosophers are the unacknowledged legislators of the world.',
		author: 'Percy Bysshe Shelley',
		bio: 'English Romantic poet, 1792–1822',
		category: 'Creativity',
	},
	{
		text: 'The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.',
		author: 'John Milton',
		bio: 'English poet, 1608–1674',
		category: 'Mindset',
	},
	{
		text: 'Long is the way and hard, that out of Hell leads up to Light.',
		author: 'John Milton',
		bio: 'English poet, 1608–1674',
		category: 'Resilience',
	},
	{
		text: 'Solitude sometimes is best society.',
		author: 'John Milton',
		bio: 'English poet, 1608–1674',
		category: 'Mindfulness',
	},
	{
		text: 'All that glitters is not gold.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Wisdom',
	},
	{
		text: 'Some are born great, some achieve greatness, and some have greatness thrust upon them.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Ambition',
	},
	{
		text: 'The lady doth protest too much, methinks.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Wisdom',
	},
	{
		text: 'The quality of mercy is not strained.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Compassion',
	},
	{
		text: 'Love looks not with the eyes, but with the mind.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Love',
	},
	{
		text: 'If music be the food of love, play on.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Love',
	},
	{
		text: 'The time of life is short.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Time',
	},
	{
		text: 'To thine own self be true.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Integrity',
	},
	{
		text: 'We are such stuff as dreams are made on.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Dreams',
	},
	{
		text: "All's well that ends well.",
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Hope',
	},
	{
		text: 'The rest is silence.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Life',
	},
	{
		text: 'Now is the winter of our discontent.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Change',
	},
	{
		text: 'Et tu, Brute?',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Betrayal',
	},
	{
		text: 'The fault, dear Brutus, is not in our stars, but in ourselves.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Responsibility',
	},
	{
		text: 'Cowards die many times before their deaths.',
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Courage',
	},
	{
		text: "What's past is prologue.",
		author: 'William Shakespeare',
		bio: 'English playwright & poet, 1564–1616',
		category: 'Philosophy',
	},
	{
		text: 'We are masters of our fate.',
		author: 'William Ernest Henley',
		bio: 'English poet & editor, 1849–1903',
		category: 'Resilience',
	},
	{
		text: 'It matters not how strait the gate, how charged with punishments the scroll.',
		author: 'William Ernest Henley',
		bio: 'English poet & editor, 1849–1903',
		category: 'Resilience',
	},
	{
		text: 'Hope is the thing with feathers that perches in the soul.',
		author: 'Emily Dickinson',
		bio: 'American poet, 1830–1886',
		category: 'Hope',
	},
	{
		text: 'That it will never come again is what makes life so sweet.',
		author: 'Emily Dickinson',
		bio: 'American poet, 1830–1886',
		category: 'Life',
	},
	{
		text: 'Forever is composed of nows.',
		author: 'Emily Dickinson',
		bio: 'American poet, 1830–1886',
		category: 'Time',
	},
	{
		text: 'If I can stop one heart from breaking, I shall not live in vain.',
		author: 'Emily Dickinson',
		bio: 'American poet, 1830–1886',
		category: 'Kindness',
	},
	{
		text: 'Unable are the loved to die. For love is immortality.',
		author: 'Emily Dickinson',
		bio: 'American poet, 1830–1886',
		category: 'Love',
	},
	{
		text: 'We never know how high we are till we are called to rise.',
		author: 'Emily Dickinson',
		bio: 'American poet, 1830–1886',
		category: 'Perspective',
	},
	{
		text: 'Dwell in possibility.',
		author: 'Emily Dickinson',
		bio: 'American poet, 1830–1886',
		category: 'Creativity',
	},
	{
		text: "Go confidently in the direction of your dreams! Live the life you've imagined.",
		author: 'Henry David Thoreau',
		bio: 'American philosopher & writer, 1817–1862',
		category: 'Dreams',
	},
	{
		text: 'An early-morning walk is a blessing for the whole day.',
		author: 'Henry David Thoreau',
		bio: 'American philosopher & writer, 1817–1862',
		category: 'Mindfulness',
	},
	{
		text: 'Simplify, simplify.',
		author: 'Henry David Thoreau',
		bio: 'American philosopher & writer, 1817–1862',
		category: 'Perspective',
	},
	{
		text: 'However mean your life is, meet it and live it.',
		author: 'Henry David Thoreau',
		bio: 'American philosopher & writer, 1817–1862',
		category: 'Life',
	},
	{
		text: 'The price of anything is the amount of life you exchange for it.',
		author: 'Henry David Thoreau',
		bio: 'American philosopher & writer, 1817–1862',
		category: 'Time',
	},
	{
		text: "It's not what you look at that matters, it's what you see.",
		author: 'Henry David Thoreau',
		bio: 'American philosopher & writer, 1817–1862',
		category: 'Perspective',
	},
	{
		text: 'I have learned, in whatsoever state I am, therewith to be content.',
		author: 'Paul the Apostle',
		bio: 'Early Christian apostle, 1st century',
		category: 'Contentment',
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
