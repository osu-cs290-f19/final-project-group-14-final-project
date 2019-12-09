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

// Add Template Button
var addTemplateButton = document.getElementById('add-template-button');
var newTemplatePrompt = document.getElementById('new-template-container');

addTemplateButton.addEventListener('click', function ()
{
	backdrop.classList.remove('hidden');
	newTemplatePrompt.classList.remove('hidden');
});

// New Template Cancel Button
var newTemplateCancelButton = document.getElementById('new-template-cancel');
var newTemplateInputBox = document.getElementById('new-template-input-box');

newTemplateCancelButton.addEventListener('click', function ()
{
	backdrop.classList.add('hidden');
	newTemplatePrompt.classList.add('hidden');
	newTemplateInputBox.value = "";
});