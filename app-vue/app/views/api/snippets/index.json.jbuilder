# json.array! @snippets, :title, :content
json.array! @snippets, partial: "api/snippets/snippet", as: :snippet
