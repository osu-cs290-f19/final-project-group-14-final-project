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