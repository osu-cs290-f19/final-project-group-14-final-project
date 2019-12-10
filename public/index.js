// Templates Tab
var templatesTab = document.getElementById('templates-tab');
var templates = document.getElementById('templates');
var completedMadlibs = document.getElementById('completed-madlibs');
var aboutUs = document.getElementById('about-us');

templatesTab.addEventListener('click', function ()
{
	console.log('== Templates Tab clicked');

	templates.classList.remove('hidden');
	templatesTab.classList.add('tab-clicked');
	completedMadlibs.classList.add('hidden');
	completedMadlibsTab.classList.remove('tab-clicked');
	aboutUs.classList.add('hidden');
	aboutUsTab.classList.remove('tab-clicked');
});

// Completed Mad Libs Tab
var completedMadlibsTab = document.getElementById('completed-madlibs-tab');

completedMadlibsTab.addEventListener('click', function ()
{
	console.log('== Completed Mad Libs Tab clicked');

	completedMadlibs.classList.remove('hidden');
	completedMadlibsTab.classList.add('tab-clicked');
	templates.classList.add('hidden');
	templatesTab.classList.remove('tab-clicked');
	aboutUs.classList.add('hidden');
	aboutUsTab.classList.remove('tab-clicked');
});

// About Us Tab
var aboutUsTab = document.getElementById('about-us-tab');

aboutUsTab.addEventListener('click', function ()
{
	console.log('== About Us Tab clicked');

	aboutUs.classList.remove('hidden');
	aboutUsTab.classList.add('tab-clicked');
	templates.classList.add('hidden');
	templatesTab.classList.remove('tab-clicked');
	completedMadlibs.classList.add('hidden');
	completedMadlibsTab.classList.remove('tab-clicked');
});

// Mad Lib Template
var template = document.getElementsByClassName('template');
var templateTitle = document.getElementsByClassName('template-title');
var templatePostTitle = document.getElementsByClassName('template-post-title');
var backdrop = document.getElementById('backdrop');
var templatePosts = document.getElementById('template-posts');

for (var i = 0; i < template.length; i++)
{
	(function (index)
	{
		template[index].addEventListener('click', function ()
		{
			console.log('== Template clicked');
			console.log('== Template Title:', templateTitle[index].textContent);

			backdrop.classList.remove('hidden');
			templatePosts.classList.remove('hidden');
			templatePostTitle[0].textContent = templateTitle[index].textContent;
		});
	})(i);
}

// Template Post Cancel Button
var templatePostCancelButton = document.getElementById('template-post-cancel');

templatePostCancelButton.addEventListener('click', function ()
{
	backdrop.classList.add('hidden');
	templatePosts.classList.add('hidden');
});

// Completed Mad Libs
var completedMadlib = document.getElementsByClassName('completed-madlib');
var viewMadlibContainer = document.getElementById('view-madlib-container');
var viewMadlibTitle = document.getElementsByClassName('view-madlib-title');
var viewMadlibText = document.getElementsByClassName('view-madlib-text-container');
var completedMadlibTitle = document.getElementsByClassName('madlib-title');
var completedMadlibText = document.getElementsByClassName('madlib-text');

for (var i = 0; i < completedMadlib.length; i++)
{
	(function (index)
	{
		completedMadlib[index].addEventListener('click', function ()
		{
			console.log('== Completed Mad Lib clicked');

			backdrop.classList.remove('hidden');
			viewMadlibContainer.classList.remove('hidden');
			viewMadlibTitle[0].textContent = completedMadlibTitle[index].textContent;
			viewMadlibText[0].textContent = completedMadlibText[index].textContent;
		});
	})(i);
}

// View Mad Lib OK Button
var viewMadlibOkButton = document.getElementById('view-madlib-ok');

viewMadlibOkButton.addEventListener('click', function ()
{
	backdrop.classList.add('hidden');
	viewMadlibContainer.classList.add('hidden');
});

// Insert New Post
function insertNewPost(title, noun, noun2, verb, adjective, adjective2)
{
	var templateContent =
	{
		Title: title,
		Noun: photoURL,
		Noun2: price,
		Verb: city,
		Adjective: adjective
	};

	var templateHTML = Handlebars.template.post(templateContent);
	templates.insertAdjacentHTML("beforeend", templateHTML);
};
