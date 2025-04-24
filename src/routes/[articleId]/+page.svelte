<script lang="ts">
    import type { PageData } from "./$types";
        export let data : PageData
        export let form;
       const {article} =data

    </script>
{#if article}
<a href="./" class="h-20 w-80 px-10 bg-green-700 text-white mt-12 rounded-xl">Back</a>
<form class="space-y-4" method="POST" action="?/edit">
    <div>
      <label class="block text-green-700 mt-8 mb-1 text-sm" for="title">Title</label>
      <input id="title" name="title" value={article.title} type="text" class="w-full border border-green-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400">
    </div>
    <div>
      <label class="block text-green-700 mb-1 text-sm" for="description">Description</label>
      <textarea id="description" name="description" rows="4" value={article.description} class="w-full border border-green-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"></textarea>
    </div>
    <button type="submit" class="w-full cursor-pointer bg-green-600 text-white py-2 rounded hover:bg-green-700 text-sm font-semibold">Update Article</button>
</form>
{#if form?.message}
<p >{form.message}</p>
{/if}
  {:else}
<p>Loading...</p>
{/if}
