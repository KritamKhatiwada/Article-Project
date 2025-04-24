<script lang="ts">
import type { PageData } from "./$types";
    export let data : PageData
   const {articles} =data
console.log(articles)
</script>

<!-- +page.svelte compatible plain HTML & Tailwind CSS -->
<div class="bg-green-50 min-h-screen p-6 font-sans">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Left: Articles List -->
        <div class="md:col-span-2 space-y-4">
            <h2 class="text-2xl font-bold text-green-800">Articles</h2>
            <div class="space-y-4">
            {#each articles as article}
          <!-- Example Article -->
          <div class="bg-white p-4 rounded-2xl shadow-sm border border-green-100">
            <h3 class="text-lg font-semibold text-green-700">{article.title}</h3>
            <p class="text-sm text-green-900 mb-4">{article.description}</p>
            <div class="flex gap-2">
              <button class="px-3 py-1 bg-green-100 text-green-800 rounded hover:bg-green-200 text-sm">Edit</button>
              <button class="px-3 py-1 bg-red-100 text-red-800 rounded hover:bg-red-200 text-sm">Delete</button>
            </div>
          </div>
          {/each}
          <!-- Add more articles here manually or with {#each} in Svelte -->
        </div>
      </div>
  
      <!-- Right: Form -->
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-green-100 h-90">
        <h2 class="text-xl font-bold text-green-800 mb-4">Add Article</h2>
        <form class="space-y-4">
          <div>
            <label class="block text-green-700 mb-1 text-sm" for="title">Title</label>
            <input id="title" name="title" type="text" class="w-full border border-green-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400">
          </div>
          <div>
            <label class="block text-green-700 mb-1 text-sm" for="description">Description</label>
            <textarea id="description" name="description" rows="4" class="w-full border border-green-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"></textarea>
          </div>
          <button type="submit" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 text-sm font-semibold">Add Article</button>
        </form>
      </div>
    </div>
  </div>