I followed the following steps for getting the task to work as expected:
 - Fetching data directly from GitHub raw
 - Saving fetchedData in Redux Store
 - Getting unique values of camps, countries and schools (Removing duplicates)
 - First country and camp are selected by default
 - Filtering schools based on selected country and camp
 - Show All schools is the default ( no extra filteration needed, just show all elements that exist in both country and camp)
 - Whenever selected country or camp changes, Schools are filtered again to match specified values
 - If a specific school is already selected && selected country/camp changed =>
                    ~ if the school exists in the new filtered data, it won't change
                    ~ else, selected school will be back to default (Show All)

I had a problem drawing chart data because each school records only the months they provided lessons in. So, I decided to fill the unspecified months with lessons = 0 & id= null;

When any of the created months are clicked, I render a modal showing that there was no data specified for this point.

If any other point is clicked, you should be redirected to Details Page ( id is sent as a route param so that we can get point details whenever Details Page is rendered)

In Details Screen, You can find a table containing everything about the clicked point.

When you're back from details screen, the previously selected country, camp and school will remain the same because they're stored in redux store.
