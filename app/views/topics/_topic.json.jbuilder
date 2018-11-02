json.extract! topic, :id, :title, :description, :likes_count, :created_at, :updated_at
json.url topic_url(topic, format: :json)
